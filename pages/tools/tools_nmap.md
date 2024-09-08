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



<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Click here for Usage Notes</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">

  <link rel="stylesheet" type="text/css" href="nmap_builder.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="nmap_builder.js"></script>

<!-- body -->
   <div class="body">
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





<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
code block
</code></pre></div></div>


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

