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
<code>systeminfo | findstr Domain</code>
</pre>
If so get list of users..
<pre class="powershell-screenshot">
<code>Get-ADUser  -Filter *</code>
</pre>

looking through the details
Domain Component (DC)
OrganizationalUnitName (OU)
Common Name (CN)

List users with common name Users:
<pre class="powershell-screenshot">
<code>Get-ADUser -Filter * -SearchBase "CN=Users,DC=THMREDTEAM,DC=COM"</code>
</pre>
List users for the organisatoinal unit name:
<pre class="powershell-screenshot">
<code>Get-ADUser -Filter * -SearchBase "OU=THM,DC=THMREDTEAM,DC=COM"</code>
</pre>
Is there any AV installed? (Doesn't work on domain controllers, just workstations)
<pre class="powershell-screenshot">
<code>Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct</code>
</pre>
Is windows defender installed?
<pre class="powershell-screenshot">
<code>Get-Service WinDefend</code>
</pre>

If so, which mode is it in?
<pre class="powershell-screenshot">
<code>Get-MpComputerStatus | select RealTimeProtectionEnabled</code>
</pre>

In fact, let's look at all the status info
<pre class="powershell-screenshot">
<code>Get-MpComputerStatus</code>
</pre>

Is there a firewall set up?
<pre class="powershell-screenshot">
<code>Get-NetFirewallProfile | Format-Table Name, Enabled</code>
</pre>

If so, then try to disable
<pre class="powershell-screenshot">
<code>Set-NetFirewallProfile -Profile Domain, Public, Private -Enabled False</code>
</pre>

List out the firewall rules
<pre class="powershell-screenshot">
<code>Get-NetFirewallRule | select DisplayName, Enabled, Description</code>
</pre>

Test if a specific port is open or blocked by firewall (thinking of needs for reverse shell) (You can use the -ComputerName option to specify other mnachines on the network)
<pre class="powershell-screenshot">
<code>Test-NetConnection -ComputerName 127.0.0.1 -Port 80</code>
</pre>

Have any threats been detected on this machine?
<pre class="powershell-screenshot">
<code>Get-MpThreat</code>
</pre>

Check which event logs are on the machine
<pre class="powershell-screenshot">
<code>Get-EventLog -List</code>
</pre>

See here for more details: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog?view=powershell-5.1
Note: use Get-WinEvent cmdlet instead.
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent?view=powershell-5.1

Is sysmon running?
<pre class="powershell-screenshot">
<code>Get-Process | Where-Object { $_.ProcessName -eq "Sysmon" }</code>
or
<code>Get-CimInstance win32_service -Filter "Description = 'System Monitor service'"</code>
or
<code>reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational</code>
</pre>

If sysmon is running, find the configuration:
<pre class="powershell-screenshot">
<code>findstr /si '\<ProcessCreate onmatch="exclude"\>' C:\tools\*</code>
</pre>

Scripts to check for commonly used Antivirus, EDR, logging monitor products
https://github.com/PwnDexter/Invoke-EDRChecker
https://github.com/PwnDexter/SharpEDRChecker

Take a look at installed programs
<pre class="powershell-screenshot">
<code>wmic product get name,version</code>
</pre>