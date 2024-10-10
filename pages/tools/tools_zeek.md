---
title: Zeek (Formerly Bro)
keywords: zeek, network analyser
last_updated: July 3, 2016
tags: [prevention, detection] 
summary: "Zeek - Network traffic analyzer and intrusion detection system"
sidebar: home_sidebar
permalink: tools_zeek.html
toc: false
folder: tools
---

Zeek is the world's leading platform for network security monitoring. Flexible, open-source, and powered by defenders.

Zeek is a passive, open-source network traffic analyser. Many operators use Zeek as a network security monitor (NSM) to support suspicious or malicious activity investigations. Zeek also supports a wide range of traffic analysis tasks beyond the security domain, including performance measurement and troubleshooting.

## Commonly used switches
```
-C: Ignore checksum errors.
-r: Read pcap file.
-s: Use signature file.
```

## Examples 
```
zeek -r bigFlows.pcap -C dhcp-hostname.zeek

zeek -C -r dns-tunneling.pcap

counts of DNS unique types
cat dns.log | zeek-cut qtype_name | sort | uniq -c

Longest connection duration:
cat conn.log | zeek-cut duration | sort -r | head -n 1

Count of unique (to the domain level) DNS queries
cat dns.log | zeek-cut query |rev | cut -d '.' -f 1-2 | rev | sort |uniq | wc -l

Count connections from source IP
cat conn.log | zeek-cut id.orig_h | sort | uniq -c

List of files downloaded with extensions
cat http.log | zeek-cut uri| sort | uniq
```
<br/>
<div class="row">

         <div class="col-md-3 col-sm-6">
             <div class="panel panel-default text-center">
                 <div class="panel-heading">
                     <span class="fa-stack fa-5x">
                           <i class="fa fa-circle fa-stack-2x text-primary"></i>
                           <i class="fa fa-download fa-stack-1x fa-inverse"></i>
                     </span>
                 </div>
                 <div class="panel-body">
                     <h4>Downloads</h4>
                     <p></p>
                     <a href="https://www.brimdata.io/download/" class="btn btn-primary">Download page</a>
                 </div>
             </div>
         </div>
         <div class="col-md-3 col-sm-6">
             <div class="panel panel-default text-center">
                 <div class="panel-heading">
                     <span class="fa-stack fa-5x">
                           <i class="fa fa-circle fa-stack-2x text-primary"></i>
                           <i class="fa fa-graduation-cap fa-stack-1x fa-inverse"></i>
                     </span>
                 </div>
                 <div class="panel-body">
                     <h4>Training</h4>
                     <p>FREE online courses</p>
                     <a href="https://zed.brimdata.io/docs/tutorials" class="btn btn-primary">Tutorials</a>
                 </div>
             </div>
         </div>
         <div class="col-md-3 col-sm-6">
             <div class="panel panel-default text-center">
                 <div class="panel-heading">
                     <span class="fa-stack fa-5x">
                           <i class="fa fa-circle fa-stack-2x text-primary"></i>
                           <i class="fa fa-book fa-stack-1x fa-inverse"></i>
                     </span>
                 </div>
                 <div class="panel-body">
                     <h4>Documentation</h4>
                     <p></p>
                     <a href="https://zed.brimdata.io/docs/" class="btn btn-primary">Documentation</a>
                     <a href="https://zui.brimdata.io/docs" class="btn btn-primary">Zui documentation</a>
                 </div>
             </div>
         </div>
</div>



{% include links.html %}

