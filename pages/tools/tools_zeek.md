---
title: Zeek (Formerly Bro)
keywords: zeek, network analyser
last_updated: July 3, 2016
tags: [prevention, detection, Threat Hunting] 
summary: "Zeek - Network traffic analyzer and intrusion detection system"
sidebar: home_sidebar
permalink: tools_zeek.html
toc: false
folder: tools
---

Zeek is the world's leading platform for network security monitoring. Flexible, open-source, and powered by defenders.

Zeek is a passive, open-source network traffic analyser. Many operators use Zeek as a network security monitor (NSM) to support suspicious or malicious activity investigations. 

Zeek also supports a wide range of traffic analysis tasks beyond the security domain, including performance measurement and troubleshooting.


## Zeek is command line only
```
zeek <options> <scripts>
```

## Commonly used options
```
-C: Ignore checksum errors.
-r: Read pcap file.
-s: Use signature file.
```

## Usage Examples 
```
Run Zeek interactively
    zeekctl start
    zeekctl stop
    zeekctl status


Read a capture file
    zeek -C -r dns-tunneling.pcap

Run a zeek script on a capture file
    zeek -r bigFlows.pcap -C dhcp-hostname.zeek

Count of DNS unique types
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
                     <a href="https://zeek.org/get-zeek/" class="btn btn-primary">Download page</a>
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
                     <a href="https://github.com/zeek/zeek-training" class="btn btn-primary">Tutorials</a>
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
                     <a href="https://docs.zeek.org/en/master/quickstart.html" class="btn btn-primary">Quick start</a>
                     <a href="https://docs.zeek.org/en/master/index.html" class="btn btn-primary">Full documentation</a>
                 </div>
             </div>
         </div>
</div>



{% include links.html %}

