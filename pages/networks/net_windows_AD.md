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



Are we in an AD environment?
<pre class="powershell-screenshot">
systeminfo | findstr Domain
</pre>
If so get list of users..
<pre class="powershell-screenshot">
Get-ADUser  -Filter *
</pre>

looking through the details
Domain Component (DC)
OrganizationalUnitName (OU)
Common Name (CN)

List users with common name Users:
<pre class="powershell-screenshot">
Get-ADUser -Filter * -SearchBase "CN=Users,DC=THMREDTEAM,DC=COM"
</pre>
List users for the organisatoinal unit name:
<pre class="powershell-screenshot">
Get-ADUser -Filter * -SearchBase "OU=THM,DC=THMREDTEAM,DC=COM"
</pre>
Is there any AV installed? (Doesn't work on domain controllers, just workstations)
<pre class="powershell-screenshot">
Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct
</pre>
Is windows defender installed?
<pre class="powershell-screenshot">
Get-Service WinDefend
</pre>

If so, which mode is it in?
<pre class="powershell-screenshot">
Get-MpComputerStatus | select RealTimeProtectionEnabled
</pre>

In fact, let's look at all the status info
<pre class="powershell-screenshot">
Get-MpComputerStatus
</pre>

Is there a firewall set up?
<pre class="powershell-screenshot">
Get-NetFirewallProfile | Format-Table Name, Enabled
</pre>

If so, then try to disable
<pre class="powershell-screenshot">
Set-NetFirewallProfile -Profile Domain, Public, Private -Enabled False
</pre>

List out the firewall rules
<pre class="powershell-screenshot">
Get-NetFirewallRule | select DisplayName, Enabled, Description
</pre>

Test if a specific port is open or blocked by firewall (thinking of needs for reverse shell) (You can use the -ComputerName option to specify other mnachines on the network)
<pre class="powershell-screenshot">
Test-NetConnection -ComputerName 127.0.0.1 -Port 80
</pre>

Have any threats been detected on this machine?
<pre class="powershell-screenshot">
Get-MpThreat
</pre>

Check which event logs are on the machine
<pre class="powershell-screenshot">
Get-EventLog -List
</pre>

See here for more details: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog?view=powershell-5.1
Note: use Get-WinEvent cmdlet instead.
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent?view=powershell-5.1

Is sysmon running?
<pre class="powershell-screenshot">
Get-Process | Where-Object { $_.ProcessName -eq "Sysmon" }
or
Get-CimInstance win32_service -Filter "Description = 'System Monitor service'"
or
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational
</pre>

If sysmon is running, find the configuration:
<pre class="powershell-screenshot">
findstr /si '<ProcessCreate onmatch="exclude">' C:\tools\*
</pre>

Scripts to check for commonly used Antivirus, EDR, logging monitor products
https://github.com/PwnDexter/Invoke-EDRChecker
https://github.com/PwnDexter/SharpEDRChecker

Take a look at installed programs
<pre class="powershell-screenshot">
wmic product get name,version
</pre>