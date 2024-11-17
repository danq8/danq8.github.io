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

<pre class='bash-screenshot'>
<code>ls /etc/*-release</code>
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
