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
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Click here for Linux specifics</a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse noCrossRef">
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
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Click here for Windows specifics</a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
{{"





" | markdownify }}
                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->


{% include taglogic.html %}

{% include links.html %}
