---
title: fcrackzip
keywords: fcrackzip, response, reconnaissance
last_updated: July 3, 2016
tags: [response, reconnaissance] 
summary: "Discover passwords protecting archive files"
sidebar: home_sidebar
permalink: tools_fcrackzip.html
toc: false
folder: tools
---


```java
fcrackzip -b BruteForceAttack.zip -u -c a1 -l 6; espeak "OK I'm done with that"

fcrackzip -D -u -p /usr/share/wordlists/rockyou.txt DictionaryAttack.zip; espeak "OK I'm done with that" 
```

<h2>Alternative</h2>
```
zip2john BruteForceAttack.zip > BruteForceAttack.hash

Add lines to john.conf (on Unix-like systems) or john.ini (windows)
	[List.Rules:Single]
	Az"?!"
	MinLen = 6
	MaxLen = 8

john BruteForceAttack.hash 
```

<h2>Usage</h2>
```java
USAGE: fcrackzip
          [-b|--brute-force]            use brute force algorithm
          [-D|--dictionary]             use a dictionary
          [-B|--benchmark]              execute a small benchmark
          [-c|--charset characterset]   use characters from charset
          [-h|--help]                   show this message
          [--version]                   show the version of this program
          [-V|--validate]               sanity-check the algorithm
          [-v|--verbose]                be more verbose
          [-p|--init-password string]   use string as initial password/file
          [-l|--length min-max]         check password with length min to max
          [-u|--use-unzip]              use unzip to weed out wrong passwords
          [-m|--method num]             use method number "num" (see below)
          [-2|--modulo r/m]             only calculcate 1/m of the password
          file...                    the zipfiles to crack
```

[https://www.kali.org/tools/fcrackzip/](https://www.kali.org/tools/fcrackzip/){:target="_blank" rel="noreferrer noopener"}



{% include links.html %}

