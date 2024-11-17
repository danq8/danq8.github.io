---
title: "Defense Evasion Techniques"
tagName: defense_evasion
search: exclude
permalink: act_defense_evasion_techniques.html
sidebar: home_sidebar
toc: false
folder: act
---

## An attacker may specifically use for evading detection or avoiding other defenses.


Here's some scripts to try (on friendly CTF servers!)

Windows "Peas"

[https://github.com/peass-ng/PEASS-ng/tree/master/winPEAS](https://github.com/peass-ng/PEASS-ng/tree/master/winPEAS){:target="_blank" rel="noreferrer noopener"}

Linux "Peas"

[https://grimbins.github.io/grimbins/linpeas/](https://grimbins.github.io/grimbins/linpeas/){:target="_blank" rel="noreferrer noopener"}

<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Click here Windows AD network specifics</a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
{{"
Are we in an AD environment?
<pre class='powershell-screenshot'>
<code>systeminfo | findstr Domain</code>
</pre>
If so get list of users..
<pre class='powershell-screenshot'>
<code>Get-ADUser  -Filter *</code>
</pre>

looking through the details
Domain Component (DC)
OrganizationalUnitName (OU)
Common Name (CN)

List users with common name Users:
<pre class='powershell-screenshot'>
<code>Get-ADUser -Filter * -SearchBase &quot;CN=Users,DC=THMREDTEAM,DC=COM&quot;</code>
</pre>
List users for the organisatoinal unit name:
<pre class='powershell-screenshot'>
<code>Get-ADUser -Filter * -SearchBase &quot;OU=THM,DC=THMREDTEAM,DC=COM&quot;</code>
</pre>
Is there any AV installed? (Doesn\'t work on domain controllers, just workstations)
<pre class='powershell-screenshot'>
<code>Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct</code>
</pre>
Is windows defender installed?
<pre class='powershell-screenshot'>
<code>Get-Service WinDefend</code>
</pre>

If so, which mode is it in?
<pre class='powershell-screenshot'>
<code>Get-MpComputerStatus | select RealTimeProtectionEnabled</code>
</pre>

In fact, let's look at all the status info
<pre class='powershell-screenshot'>
<code>Get-MpComputerStatus</code>
</pre>

Is there a firewall set up?
<pre class='powershell-screenshot'>
<code>Get-NetFirewallProfile | Format-Table Name, Enabled</code>
</pre>

If so, then try to disable
<pre class='powershell-screenshot'>
<code>Set-NetFirewallProfile -Profile Domain, Public, Private -Enabled False</code>
</pre>

List out the firewall rules
<pre class='powershell-screenshot'>
<code>Get-NetFirewallRule | select DisplayName, Enabled, Description</code>
</pre>

Test if a specific port is open or blocked by firewall (thinking of needs for reverse shell) (You can use the -ComputerName option to specify other mnachines on the network)
<pre class='powershell-screenshot'>
<code>Test-NetConnection -ComputerName 127.0.0.1 -Port 80</code>
</pre>

Have any threats been detected on this machine?
<pre class='powershell-screenshot'>
<code>Get-MpThreat</code>
</pre>

Check which event logs are on the machine
<pre class='powershell-screenshot'>
<code>Get-EventLog -List</code>
</pre>

See here for more details: 
[https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog?view=powershell-5.1](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog?view=powershell-5.1)

Note: use Get-WinEvent cmdlet instead.

[https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent?view=powershell-5.1](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-winevent?view=powershell-5.1)

Is sysmon running?
<pre class='powershell-screenshot'>
<code>Get-Process | Where-Object &#123; $_.ProcessName -eq &quot;Sysmon&quot; &#125;</code>
or
<code>Get-CimInstance win32_service -Filter &quot;Description = 'System Monitor service'&quot;</code>
or
<code>reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational</code>
</pre>

If sysmon is running, find the configuration:
<pre class='powershell-screenshot'>
<code>findstr /si &quot;\<ProcessCreate onmatch='exclude'\>&quot; C:\tools\*</code>
</pre>

Scripts to check for commonly used Antivirus, EDR, logging monitor products

[https://github.com/PwnDexter/Invoke-EDRChecker](https://github.com/PwnDexter/Invoke-EDRChecker)

[https://github.com/PwnDexter/SharpEDRChecker](https://github.com/PwnDexter/SharpEDRChecker)

Take a look at all installed programs
<pre class='powershell-screenshot'>
<code>wmic product get name,version</code>
</pre>

Have a quick look-see if the user is hiding anything juicy?
<pre class='powershell-screenshot'>
<code>Get-ChildItem -Hidden -Path C:\Users\username\Desktop\</code>
</pre>

Anything else interesting running in services?
<pre class='powershell-screenshot'>
<code>net start</code>
</pre>

Get the service details
<pre class='powershell-screenshot'>
<code>wmic service where &quot;name like 'process_name'&quot; get Name,PathName</code>
</pre>

Get the processID for that process
<pre class='powershell-screenshot'>
<code>Get-Process -Name process_name</code>
</pre>

Use the processID to see who\'s watching
<pre class='powershell-screenshot'>
<code>netstat -noa |findstr &quot;LISTENING&quot; |findstr &quot;processID&quot;</code>
</pre>




" | markdownify }}
                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->

{% include taglogic.html %}

{% include links.html %}
