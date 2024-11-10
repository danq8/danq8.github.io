---
title: sqlmc
keywords: sqlmc, security assesment, pentesting
last_updated: July 3, 2016
tags: [security_assesment, pentest] 
summary: "SQL Injection Massive Checker"
sidebar: home_sidebar
permalink: tools_sqlmc.html
toc: false
folder: tools
---

<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Click here for Usage Notes</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
<ul>
<li>-u, --url: The URL to scan (required)<li/><li>-d, --depth: The depth to scan (required)<li/><li>-o, --output: The output file to save the results<li/>
<ul/>
Example usage:


<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
sqlmc -u http://example.com -d 2
</code></pre></div></div>


                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->


{% include links.html %}

