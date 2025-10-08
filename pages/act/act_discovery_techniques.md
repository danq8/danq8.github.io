---
title: "Discovery Techniques"
tagName: discovery_techniques
search: exclude
permalink: act_discovery_techniques.html
sidebar: home_sidebar
toc: false
folder: act
---

## Allow an attacker to gain knowledge about a system and its network environment.

We're looking for:

*  Users and groups
*  Hostnames
*  Routing tables
*  Network shares
*  Network services
*  Applications and banners
*  Firewall configurations
*  Service settings and audit configurations
*  SNMP and DNS details
*  Hunting for credentials (saved on web browsers or client applications)




<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Click here for Linux specifics</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
{{"

## System information

Let\'s see what system we\'ve landed on?

<pre class='bash-screenshot'>
<code>ls /etc/*-release</code>
</pre>

<pre class='bash-screenshot'>
<code>cat /etc/os-release</code>
</pre>

What\'s the name of this machine?

<pre class='bash-screenshot'>
<code>hostname</code>
</pre>

## User details

who\'s been here?

<pre class='bash-screenshot'>
<code>cat /etc/passwd</code>
</pre>

What groups exist?

<pre class='bash-screenshot'>
<code>cat /etc/group</code>
</pre>

If we can... let's get the password hashes

<pre class='bash-screenshot'>
<code>sudo cat /etc/shadow</code>
</pre>

Any mail?

<pre class='bash-screenshot'>
<code>ls -lh /var/mail/</code>
</pre>

Who\'s logged on to this machine?

<pre class='bash-screenshot'>
<code>who</code>
</pre>

Who are we currently logged on as?

<pre class='bash-screenshot'>
<code>whoami</code>

and

<code>id</code>
</pre>

What\'s everyone up to at the moment?

<pre class='bash-screenshot'>
<code>w</code>
</pre>

Let\'s look at some history in case there\'s a better time to come back?

<pre class='bash-screenshot'>
<code>last</code>
</pre>


## Networking details

What network cards are on this machine?
<pre class='bash-screenshot'>
<code>ip a s</code>
</pre>

Where\'s the DNS?
<pre class='bash-screenshot'>
<code>cat /etc/resolv.conf</code>
</pre>

If you have root, see what's connecting 
<pre class='bash-screenshot'>
<code>sudo netstat -plt</code>
</pre>

Any connections out?

<pre class='bash-screenshot'>
<code>sudo lsof -i</code>
</pre>

## Services details

What\'s cooking?

<pre class='bash-screenshot'>
<code>ps axf</code>
</pre>



" | markdownify }}
                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->


<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Click here for Windows specifics</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
{{"

## System information

Let\'s see what system we\'ve landed on?

<pre class='bash-screenshot'>
<code>systeminfo</code>
</pre>

What patch level are we up to?

<pre class='bash-screenshot'>
<code>wmic qfe get Caption,Description</code>
</pre>

What services are running?

<pre class='bash-screenshot'>
<code>net start</code>

or just the installed programs?

<code>wmic product get name,version,vendor</code>
</pre>

## User details

Who are we logged on as?
<pre class='bash-screenshot'>
<code>whoami</code>
</pre>

And what are we allowed to do?
<pre class='bash-screenshot'>
<code>whoami /priv</code>
</pre>

And what groups do we belong to?
<pre class='bash-screenshot'>
<code>whoami /groups</code>
</pre>

Local settings
<pre class='bash-screenshot'>
<code>net accounts </code>
</pre>

Are we on a domain?
<pre class='bash-screenshot'>
<code>net accounts /domain</code>
</pre>

## Networking details



<pre class='bash-screenshot'>
<code>ipconfig /all</code>
</pre>

<pre class='bash-screenshot'>
<code>netstat -abno >> netstat.txt</code>
</pre>


Any shares out there?
<pre class='bash-screenshot'>
<code>net share</code>
</pre>





" | markdownify }}
                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->

Other helpful bits for Windows:

Sysinternals Suite

[https://docs.microsoft.com/en-us/sysinternals/downloads/](https://docs.microsoft.com/en-us/sysinternals/downloads/){:target="_blank" rel="noreferrer noopener"}

Process Hacker

[https://processhacker.sourceforge.io/](https://processhacker.sourceforge.io/){:target="_blank" rel="noreferrer noopener"}

GhostPack Seatbelt (Needs compiling with Visual Studio)

[https://github.com/GhostPack/Seatbelt](https://github.com/GhostPack/Seatbelt){:target="_blank" rel="noreferrer noopener"}


## Tools that have a level of evasion built in:

{% include taglogic.html %}

{% include links.html %}
