---
title: NMap <span class="label label-success">Fave</span>
keywords: NMap, security assesment, pentesting
last_updated: July 3, 2016
tags: [security_assesment, pentest] 
summary: "The world’s most used penetration testing framework."
sidebar: home_sidebar
permalink: tools_nmap.html
toc: false
folder: tools
---



<div class="panel-group" id="accordion1">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">Click here for Usage Notes</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">


<p>Based on <a href="https://hackertarget.com/nmap-cheatsheet-a-quick-reference-guide/">https://hackertarget.com/nmap-cheatsheet-a-quick-reference-guide/</a></p>



<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>

</code></pre></div></div>


<div class="entry-content">
		<div class="row">
<div class="col-md-8">
<p class="fs-lg">Nmap has a multitude of options, when you first start playing with this excellent tool, it can be a bit daunting.</p>
<p class="fs-lg">In this cheat sheet, you will find a series of practical example commands for running Nmap and getting the most of this powerful tool.</p>
<p>Keep in mind this cheat sheet merely touches the surface of the available options. The <a href="http://nmap.org/docs.html">Nmap Documentation portal</a> is your reference for digging deeper into the options available.</p>
</div>
<div class="col-md-4">
<div class="alert alert-dark dark-mid-bg fs-sm toc-links"><span class="text-light ms-3">Contents:</span><p></p>
<ul class="icon">
<li class="double-right"> <a href="#targetselection">Target Selection</a></li>
<li class="double-right"> <a href="#portselection">Port Selection</a></li>
<li class="double-right"> <a href="#scantypes">Scan Types</a></li>
<li class="double-right"> <a href="#servicedetection">Service and Operating System Detection</a></li>
<li class="double-right"> <a href="#outputformats">Output formats</a></li>
<li class="double-right"> <a href="#nmap-csv">Nmap CSV Output</a></li>
<li class="double-right"> <a href="#nsescripts">NSE Scripting</a></li>
<li class="double-right"> <a href="#ddosreflectors">Find DDOS reflectors</a></li>
<li class="double-right"> <a href="#httpinfo">HTTP info gathering</a></li>
<li class="double-right"> <a href="#heartbleed">Heartbleed Detection</a></li>
<li class="double-right"> <a href="#ipinfo">IP Information Gathering</a></li>
<li class="double-right"> <a href="#remotescanning">Remote Scanning</a></li>
<li class="double-right"> <a href="#additionalresources">Additional Resources</a></li>
</ul>
</div>
</div>
</div>
<h3 id="targetselection">Nmap Target Selection</h3>
<table class="table table-condensed table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 40%;">Scan a single IP</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan a host</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap www.testhostname.com</td>
</tr><tr>
<td style="color:#3276B1; width: 40%;">Scan a range of IPs</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap 192.168.1.1-20</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan a subnet</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap 192.168.1.0/24</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan targets from a text file</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -iL list-of-ips.txt</td>
</tr>
</tbody></table>
<p>These are all default scans, which will scan 1000 TCP ports. Host discovery will take place.</p>
<hr>
<h3 id="portselection">Nmap Port Selection</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 50%;">Scan a single Port</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -p 22 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 50%;">Scan a range of ports</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -p 1-100 192.168.1.1</td>
</tr><tr>
<td style="color:#3276B1; width: 50%;">Scan 100 most common ports (Fast)</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -F 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan all 65535 ports</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -p- 192.168.1.1</td>
</tr>
</tbody></table>
<hr>
<h3 id="scantypes">Nmap Port Scan types</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 40%;">Scan using TCP connect</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sT 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan using TCP SYN scan (default)</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sS 192.168.1.1</td>
</tr><tr>
<td style="color:#3276B1; width: 40%;">Scan UDP ports</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sU -p 123,161,162 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Scan selected ports - ignore discovery</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -Pn -F 192.168.1.1</td>
</tr>
</tbody></table>
<p>Privileged access is required to perform the default <code>SYN</code> scans. If privileges are insufficient a TCP connect scan will be used. A TCP connect requires a full TCP connection to be established and therefore is a slower scan. Ignoring discovery is often required as many firewalls or hosts will not respond to <code>PING</code>, so could be missed unless you select the <code>-Pn</code> parameter. Of course this can make scan times much longer as you could end up sending scan probes to hosts that are not there.</p>
<p>Take a look at the <a href="/nmap-tutorial/">Nmap Tutorial</a> for a detailed look at the scan process.</p>
<hr>
<h3 id="servicedetection">Service and OS Detection</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 40%;">Detect OS and Services</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -A 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Standard service detection</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV 192.168.1.1</td>
</tr><tr>
<td style="color:#3276B1; width: 40%;">More aggressive Service Detection</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV --version-intensity 5 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Lighter banner grabbing detection</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV --version-intensity 0 192.168.1.1</td>
</tr>
</tbody></table>
<p>Service and OS detection rely on different methods to determine the operating system or service running on a particular port. The more aggressive service detection is often helpful if there are services running on unusual ports. On the other hand the lighter version of the service will be much faster as it does not really attempt to detect the service simply grabbing the banner of the open service.</p>
<hr>
<h3 id="outputformats">Nmap Output Formats</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 50%;">Save default output to file</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -oN outputfile.txt 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 50%;">Save results as XML</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -oX outputfile.xml 192.168.1.1</td>
</tr><tr>
<td style="color:#3276B1; width: 50%;">Save results in a format for grep</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -oG outputfile.txt 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 50%;">Save in all formats</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -oA outputfile 192.168.1.1</td>
</tr>
</tbody></table>
<p>The default format could also be saved to a file using a simple file redirect <code>command &gt; file</code>. Using the <code>-oN</code> option allows the results to be saved but also can be monitored in the terminal as the scan is under way. </p>
<hr>
<h3 id="nmap-csv">Nmap Output to CSV</h3>
<p>Nmap by default has no <code>csv</code> output format. Use the <code>XML</code> output to extract the relevant fields into <code>csv</code> with <code>python</code>.</p>
<p>Jump over to <strong>github</strong> and grab our sample script that can be easily modified depending on your requirements. With <code>csv</code> files it is easy to convert into <code>xlsx</code> for reporting. This can be done manually or using our <code>python</code> conversion script.</p>
<table class="table table-striped table-sm">
<tbody><tr>
<td><a href="https://github.com/hackertarget/nmap-csv-xlsx" title="Nmap XML output to CSV">Nmap XML to CSV</a></td>
</tr>
</tbody></table>
<hr>
<h3 id="nsescripts">Digging deeper with NSE Scripts</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 30%;">Scan using default safe scripts</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV -sC 192.168.1.1</td>
</tr>
<tr>
<td style="color:#3276B1; width: 30%;">Get help for a script</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap --script-help=ssl-heartbleed</td>
</tr>
<tr>
<td style="color:#3276B1; width: 30%;">Scan using a specific NSE script</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV -p 443 –script=ssl-heartbleed.nse 192.168.1.1</td>
</tr><tr>
<td style="color:#3276B1; width: 30%;">Scan with a set of scripts</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV --script=smb* 192.168.1.1</td>
</tr>
</tbody></table>
<p>According to my Nmap install there are currently <strong>581 NSE scripts</strong>. The scripts are able to perform a wide range of security related testing and discovery functions. If you are serious about your network scanning you really should take the time to get familiar with some of them.</p>
<p>The option <code>--script-help=$scriptname</code> will display help for the individual scripts. To get an easy list of the installed scripts try <code>locate nse | grep script</code>. </p>
<p>You will notice I have used the <code>-sV</code> service detection parameter. Generally most NSE scripts will be more effective and you will get better coverage by including service detection.</p>
<hr>
<h3 id="ddosreflectors">A scan to search for DDOS reflection UDP services</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 30%;">Scan for UDP DDOS reflectors</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24</td>
</tr>
</tbody></table>
<p>UDP based DDOS reflection attacks are a common problem that network defenders come up against. This is a handy Nmap command that will scan a target list for systems with open UDP services that allow these attacks to take place. Full details of the command and the background can be found on the <a href="https://isc.sans.edu/diary/Using+nmap+to+scan+for+DDOS+reflectors/18193">Sans Institute Blog</a> where it was first posted.</p>
<hr>
<h3 id="httpinfo">HTTP Service Information</h3>
<t><p></p>
</t><table class="table table-sm table-striped"><tbody><tr><td style="color:#3276B1; width: 40%;">Gather page titles from HTTP services</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap --script=http-title 192.168.1.0/24</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Get HTTP headers of web services</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap --script=http-headers 192.168.1.0/24</td>
</tr>
<tr>
<td style="color:#3276B1; width: 40%;">Find web apps from known paths</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap --script=http-enum 192.168.1.0/24</td>
</tr>
</tbody></table>
<p>There are many HTTP information gathering scripts, here are a few that are simple but helpful when examining larger networks. Helps in quickly identifying what the HTTP service that is running on the open port. Note the <code>http-enum</code> script is particularly noisy. It is similar to <a href="/nikto-website-scanner/">Nikto</a> in that it will attempt to enumerate known paths of web applications and scripts. This will inevitably generated hundreds of <code>404 HTTP responses</code> in the web server error and access logs.</p>
<hr>
<h3 id="heartbleed">Detect Heartbleed SSL Vulnerability</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 30%;">Heartbleed Testing</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24</td>
</tr>
</tbody></table>
<p>Heartbleed detection is one of the available SSL scripts. It will detect the presence of the well known Heartbleed vulnerability in SSL services. Specify alternative ports to test SSL on mail and other protocols <em>(Requires Nmap 6.46)</em>.</p>
<hr>
<h3 id="ipinfo">IP Address information</h3>
<table class="table table-sm table-striped">
<tbody><tr>
<td style="color:#3276B1; width: 30%;">Find Information about IP address</td>
<td style="font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace;">nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24</td>
</tr>
</tbody></table>
<p>Gather information related to the IP address and netblock owner of the IP address. Uses ASN, whois and geoip location lookups. See the <a href="/ip-tools/" title="IP and Domain Information Tools">IP Tools</a> for more information and similar IP address and DNS lookups.</p>
<hr>
<h3 id="remotescanning">Remote Scanning</h3>
<p>Testing your network perimeter from an external perspective is key when you wish to get the most accurate results. By assessing your exposure from the attackers perspective you can validate firewall rule audits and understand exactly what is allowed into your network. This is the reason we offer a hosted or <a href="/nmap-online-port-scanner/" alt="online namp" title="Online Nmap Scanning" class="tooltips">online version of the Nmap port scanner</a>. To enable remote scanning easily and effectively because anyone who has played with <code>shodan.io</code> knows very well how badly people test their perimeter networks.</p>
<hr>
<h3 id="additionalresources">Additional Resources</h3>
<p>The above commands are just a taste of the power of Nmap.  Check out our <a href="/nmap-tutorial/">Nmap Tutorial</a> that has more information and tips.<br>
You could also view the full set of features by running Nmap with no options. The creator of Nmap, Fyodor, has a <a href="https://nmap.org/book/">book</a> available that covers the tool in depth.</p>
<div class="dark-mode bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-2 py-xl-3 px-4 mt-5 __text_mode_custom_bg__" style="background-image: url(/images/osint-background.webp);">
<div class="row position-relative zindex-2 py-3 my-1 my-md-3">
<div class="col-md-6">
<div class="mx-auto px-lg-4" style="max-width: 440px;">
<h4 class="h5 pb-1 pb-md-3 pb-lg-4"><span class="bright-gr">Next Level</span> Your Technical Network Intelligence</h4>
<p>    <a href="/use-cases/" class="btn btn-sm btn-primary shadow-primary w-100 w-sm-auto">Use Cases and More Info</a>
    </p></div>
</div>
<div class="col-md-6 mt-4">
<ul class="list-unstyled fs-lg d-none d-md-block">
<li class="mb-2 h6">
      <i class="bi bi-check2-circle me-2"></i>13 Vulnerability Scanners</li>
<li class="mb-2 h6"> <i class="bi bi-check2-circle me-2"></i>17 Free DNS &amp; Network Tools</li>
<li class="h6">
      <i class="bi bi-check2-circle me-2"></i>4+ Billion Records of DNS / IP data</li>
</ul>
</div></div>
</div>
	</div>






                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->

<div class="panel-group" id="accordion2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Click here for NMap Builder</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">




  <link rel="stylesheet" type="text/css" href="/pages/tools/nmap_builder.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="/pages/tools/nmap_builder.js"></script>

<p>Based on <a href="https://github.com/callmeks/nmap-command-builder">https://github.com/callmeks/nmap-command-builder</a></p>
<!-- body -->
   <div class="body">
             <span class="input-group-text">Target IP</span>
          <div class="form-floating">
            <input type="text" class="form-control" id="IP" placeholder="IP address" />
            <label for="IP">IP address</label>
          </div>
      <!-- Tab links -->
      <div class="tab">
        <button class="tablinks" onclick="ChangeTab(event, 'Simple')" id="SimpleOpen"> Simple </button>
        <button class="tablinks" onclick="ChangeTab(event, 'Advance')"> Advance </button>
        <button class="tablinks" onclick="ChangeTab(event, 'NSE')"> Nmap Scripting Engine </button>
      </div>
      <!--Tab links end -->
      <!-- Simple Mode -->
      <div id="Simple" class="tabcontent">
        <h3>Simple Mode</h3>
        <div class="center">
          <!-- basic scan -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Basic-Scan" readonly />
              <label for="Basic-Scan">Basic Scan</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Basic-Scan">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <div class="explanation">Nmap scan for top 1000 common ports</div>
          <!-- basic scan end -->
          <!-- full port scan -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Full-Port-Scan" readonly />
              <label for="Full-Port-Scan">Full Port Scan</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Full-Port-Scan">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <div class="explanation">Nmap scan for all ports</div>
          <!-- full port scan end -->
          <!-- default script scan -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Default-Script-Scan" readonly />
              <label for="Default-Script-Scan">Default Script Scan</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Default-Script-Scan">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <div class="explanation"> Nmap scan for top 1000 common ports with default Nmap script </div>
          <!-- default script scan end -->
          <!-- full scan -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Full-Scan" readonly />
              <label for="Full-Scan">Full Scan</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Full-Scan">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <div class="explanation"> Nmap scan for all ports with OS detection, default Nmap script, version detection
            and traceroute </div>
          <!-- full scan end -->
          <!-- scan save output -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Scan-Save-Output" readonly />
              <label for="Scan-Save-Output">Basic Scan with output</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Scan-Save-Output">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <div class="explanation"> Nmap scan for top 1000 common ports and save into output.nmap </div>
          <!-- scan save output end -->
        </div>
      </div>
      <!-- Simple Mode end -->
      <!-- Advance Mode -->
      <div id="Advance" class="tabcontent">
        <h3>Advance Mode</h3>
        <div class="center">
          <div class="container text-start">
            <div class="row">
              <!-- Host Discovery -->
              <div class="col">
                <h4>Host Discovery</h4>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-sL" />
                  <label class="form-check-label" for="Nmap-sL">List Scan</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-sn" />
                  <label class="form-check-label" for="Nmap-sn">Disable Port Scan</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-Pn" />
                  <label class="form-check-label" for="Nmap-Pn">Treat hosts as online</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-traceroute" />
                  <label class="form-check-label" for="Nmap-traceroute">trace route</label>
                </div>
              </div>
              <!-- Host Discovery end -->
              <!-- Scan Technique -->
              <div class="col">
                <h4>Scan Technique</h4>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sS" checked />
                  <label class="form-check-label" for="Nmap-sS">Stealth Scan (Default)</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sT" />
                  <label class="form-check-label" for="Nmap-sT">Full TCP Scan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sW" />
                  <label class="form-check-label" for="Nmap-sW">Windows Scan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sN" />
                  <label class="form-check-label" for="Nmap-sN">TCP Null Scan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sF" />
                  <label class="form-check-label" for="Nmap-sF">FIN Scan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sX" />
                  <label class="form-check-label" for="Nmap-sX">Xmas Scan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sO" />
                  <label class="form-check-label" for="Nmap-sO">IP protocol Scan</label>
                </div>
                <div class="form-check ">
                  <input class="form-check-input" type="radio" name="Nmap-Scan" id="Nmap-sU" />
                  <label class="form-check-label" for="Nmap-sU">UDP Scan</label>
                </div>
              </div>
              <!-- Scan Techinque end -->
              <!-- Misc -->
              <div class="col">
                <h4>Misc</h4>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-sV" />
                  <label class="form-check-label" for="Nmap-sV">service detection</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-sC" />
                  <label class="form-check-label" for="Nmap-sC">Default Script Scan</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-O" />
                  <label class="form-check-label" for="Nmap-O">OS detection</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-A" />
                  <label class="form-check-label" for="Nmap-A">All (OS detection, version detection, script scan and
                    traceroute)</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-6" />
                  <label class="form-check-label" for="Nmap-6">IPv6 Scan</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-v" />
                  <label class="form-check-label" for="Nmap-v">verbosity</label>
                </div>
              </div>
              <!-- Misc end -->
            </div>
            <div class="row">
              <!-- Port Specification -->
              <div class="col">
                <h4>Port Specification</h4>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Port" id="Nmap-Full-Port" />
                  <label class="form-check-label" for="Nmap-Full-Port"> Full Port </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Port" id="Nmap-1000-Port" checked />
                  <label class="form-check-label" for="Nmap-1000-Port"> Top 1000 Common Port </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Port" id="Nmap-Custom-Port" />
                  <label class="form-check-label" for="Nmap-Custom-Port"> Custom Port </label>
                </div>
                <input class="form-control" id="Port-Number" type="text" />
                <div class="explanation"> * Multiple port example: 22,80 <br /> * Range example: 1-1000 </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-Exclude-Port" />
                  <label class="form-check-label" for="Nmap-Exclude-Port">Exclude Port</label>
                </div>
                <input class="form-control" id="Exclude-Port-Number" type="text" />
                <div class="explanation"> * Multiple port example: 22,80 <br /> * Range example: 1-1000 </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="Nmap-Scan-Sequence" />
                  <label class="form-check-label" for="Nmap-Scan-Sequence">Scan port sequentially</label>
                </div>
              </div>
              <!-- Port Sepcification end -->
              <!-- Timing and Performance -->
              <div class="col">
                <h4>Timing and Performance</h4>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T0" checked />
                  <label class="form-check-label" for="Nmap-T0"> Disable Timing Template </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T1" />
                  <label class="form-check-label" for="Nmap-T1"> 1 </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T2" />
                  <label class="form-check-label" for="Nmap-T2"> 2 </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T3" />
                  <label class="form-check-label" for="Nmap-T3"> 3 </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T4" />
                  <label class="form-check-label" for="Nmap-T4"> 4 (Recommended)</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Timing" id="Nmap-T5" />
                  <label class="form-check-label" for="Nmap-T5"> 5 </label>
                </div>
                <div class="explanation">* Higher number scan faster</div>
              </div>
              <!-- Timing and Performance end -->
              <!-- File Output -->
              <div class="col">
                <h4>File Output</h4>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-DOutput" checked />
                  <label class="form-check-label" for="Nmap-DOutput"> Disable File Output </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-oN" />
                  <label class="form-check-label" for="Nmap-oN"> Normal Output </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-oX" />
                  <label class="form-check-label" for="Nmap-oX"> XML Output </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-oS" />
                  <label class="form-check-label" for="Nmap-oS"> Script Output </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-oG" />
                  <label class="form-check-label" for="Nmap-oG"> Grepable Output</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Nmap-Output" id="Nmap-oA" />
                  <label class="form-check-label" for="Nmap-oA"> 3 different output in Normal, XML and Grepable
                    format</label>
                </div>
                <input class="form-control" id="Output-Name" type="text" />
                <div class="explanation">* Output File Name</div>
              </div>
              <!-- File Output end -->
            </div>
          </div>
          <!-- Advance Nmap Command -->
          <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="Advance-Nmap" readonly />
              <label for="Advance-Nmap">Nmap Command</label>
            </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="Advance-Nmap">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <!-- Advance Nmap Command end -->
        </div>
      </div>

<!-- Advance Mode end -->
  <!-- NSE Mode -->
   <div id="NSE" class="tabcontent">
        <h3>Nmap Scripting Engine Mode</h3>
        <div class="center">
          <div class="text-start">
            <!-- NSE category drop down selection -->
            <div class="form-floating">
              <select class="form-select" id="NSE-Category">
              </select>
              <label for="NSE-Category">NSE Category</label>
            </div>
            <!-- NSE category drop down selection end -->

            <!-- NSE specific drop down selection -->
   <div class="form-floating">
              <select class="form-select" id="NSE-Specific">
              </select>
              <label for="NSE-Specific">NSE Specific</label>
            </div>
            <!-- NSE specific drop down selection end -->

            <!-- specific port -->
   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="NSE-Port" />
              <label class="form-check-label" for="NSE-Port">Specific Port</label>
            </div>
            <input class="form-control " id="NSE-Port-Number" type="text" />
            <div class="explanation"> * Multiple port example: 22,80 <br /> * Range example: 1-1000 </div>
            <!-- specific port end -->

          </div>
          <!-- explanation for NSE category/specific -->
   <div class="summary">
            <table class="table table-hover">
              <tr>
                <th colspan="2">
                  <h3 id="NSE-Header"></h3>
                </th>
              </tr>
              <tr>
                <th>Link to refer: </th>
                <td>
                  <p id="NSE-Link"></p>
                </td>
              </tr>
              <tr>
                <th>Summary: </th>
                <td>
                  <p id="NSE-Summary"></p>
                </td>
              </tr>
            </table>
          </div>
          <!-- explanation for NSE category/specific end -->

          <!-- NSE Command -->
   <div class="input-group">
            <span class="input-group-text">Result:</span>
            <div class="form-floating">
              <input type="text" class="form-control-plaintext" id="NSE-Nmap" readonly />
              <label for="NSE-Nmap">Nmap Command</label>

   </div>
            <!-- copy button -->
            <div class="comment">
              <button class="btn btn-outline-secondary light" type="button" id="Copy" data-id="NSE-Nmap">
                <span class="commenttext">Copy to clipboard</span> Copy text </button>
            </div>
            <!-- copy button end -->
          </div>
          <!-- NSE Command end -->


   </div>
      </div>
      <!-- NSE Mode end -->
    </div>








                            </div>
                        </div>
                    </div>
</div>
<!-- /.panel-group -->


<div class="row">
         <div class="col-lg-12">
             <h2 class="page-header">Zap</h2>
         </div>
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
                     <p>Start with the community edition</p>
                     <a href="https://docs.metasploit.com/docs/using-metasploit/getting-started/nightly-installers.html" class="btn btn-primary">Download</a>
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
                     <p>FREE online course</p>
                     <a href="https://www.offsec.com/metasploit-unleashed/" class="btn btn-primary">Metasploit Unleashed</a>
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
                     <a href="https://docs.metasploit.com/docs/using-metasploit/getting-started/" class="btn btn-primary">Getting Started</a>
                     <a href="https://docs.metasploit.com/" class="btn btn-primary">FULL Documentation</a>
                 </div>
             </div>
         </div>
</div>



{% include links.html %}

