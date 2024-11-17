---
title: Windows AD network
keywords: Windows, network
last_updated: 10 Oct, 2024
tags: [Windows, network] 
summary: "Windows Active Directory Network"
sidebar: home_sidebar
permalink: net_windows_AD.html
toc: false
folder: tools
---


<style>
.powershell-screenshot {
  background-color: #0037DA;
  color: #C19C00;
  font-family: Consolas, monospace;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  overflow-x: auto; /* For horizontal scrolling if needed */
}

.bash-screenshot {
  background-color: #000;
  color: #00FF00;
  font-family: Consolas, monospace;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  overflow-x: auto; /* For horizontal scrolling if needed */
}
</style>

Are we in an AD environment?
systeminfo | findstr Domain

If so get list of users..
Get-ADUser  -Filter *


looking through the details
Domain Component (DC)
OrganizationalUnitName (OU)
Common Name (CN)

List users with common name Users:
Get-ADUser -Filter * -SearchBase "CN=Users,DC=THMREDTEAM,DC=COM"

List users for the organisatoinal unit name:
Get-ADUser -Filter * -SearchBase "OU=THM,DC=THMREDTEAM,DC=COM"

Is there any AV installed? (Doesn't work on domain controllers, just workstations)
Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct

Is windows defender installed?
Get-Service WinDefend

If so, which mode is it in?
Get-MpComputerStatus | select RealTimeProtectionEnabled

In fact, let's look at all the status info
Get-MpComputerStatus

Is there a firewall set up?
Get-NetFirewallProfile | Format-Table Name, Enabled

If so, then try to disable
Set-NetFirewallProfile -Profile Domain, Public, Private -Enabled False

List out the firewall rules
Get-NetFirewallRule | select DisplayName, Enabled, Description

Test if a specific port is open or blocked by firewall (thinking of needs for reverse shell) (You can use the -ComputerName option to specify other mnachines on the network)
Test-NetConnection -ComputerName 127.0.0.1 -Port 80

Have any threats been detected on this machine?
Get-MpThreat

Check which event logs are on the machine
Get-EventLog -List
See here for more details: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog?view=powershell-5.1
Note: use Get-WinEvent cmdlet instead.
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent?view=powershell-5.1

Is sysmon running?
Get-Process | Where-Object { $_.ProcessName -eq "Sysmon" }
or
Get-CimInstance win32_service -Filter "Description = 'System Monitor service'"
or
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational

If sysmon is running, find the configuration:
findstr /si '<ProcessCreate onmatch="exclude">' C:\tools\*

Scripts to check for commonly used Antivirus, EDR, logging monitor products
https://github.com/PwnDexter/Invoke-EDRChecker
https://github.com/PwnDexter/SharpEDRChecker

Take a look at installed programs
wmic product get name,version

<pre class="powershell-screenshot">
wmic product get name,version
</pre>