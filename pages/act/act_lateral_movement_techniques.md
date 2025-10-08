---
title: "Lateral Movement Techniques"
tagName: lateral_movement_techniques
search: exclude
permalink: act_lateral_movement_techniques.html
sidebar: home_sidebar
toc: false
folder: act
---

## To enable an adversary to horizontally access and control other remote systems.


Local accounts part of the local Administrators group
Domain accounts part of the local Administrators group
By default, local administrators won't be able to remotely connect to a machine and perform administrative tasks unless using an interactive session through RDP. Windows will deny any administrative task requested via RPC, SMB or WinRM since such administrators will be logged in with a filtered medium integrity token, preventing the account from doing privileged actions. . The only local account that will get full privileges is the default Administrator account.
Domain accounts with local administration privileges won't be subject to the same treatment and will be logged in with full administrative privileges.
https://docs.microsoft.com/en-us/troubleshoot/windows-server/windows-security/user-account-control-and-remote-restriction


Psexec
WinRM
sc
Creating Scheduled Tasks Remotely

Connecting to WMI From Powershell
DCOM: RPC over IP will be used for connecting to WMI. This protocol uses port 135/TCP and ports 49152-65535/TCP, just as explained when using sc.exe.
Wsman: WinRM will be used for connecting to WMI. This protocol uses ports 5985/TCP (WinRM HTTP) or 5986/TCP (WinRM HTTPS).

Installing MSI packages through WMI

NTLM authentication
Kerberos authentication

Pass-the-Hash




{% include taglogic.html %}

{% include links.html %}
