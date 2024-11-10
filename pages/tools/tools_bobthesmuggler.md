---
title: BobTheSmuggler
keywords: bobthesmuggler, pen_test
last_updated: July 3, 2016
tags: [pen_test] 
summary: "a tool that leverages HTML Smuggling Attack and allows you to create HTML files with embedded 7z/zip archives"
sidebar: home_sidebar
permalink: tools_bobthesmuggler.html
toc: false
folder: tools
---

"Bob the Smuggler" is a tool that leverages HTML Smuggling Attack and allows you to create HTML files with embedded 7z/zip archives. The tool would compress your binary (EXE/DLL) into 7z/zip file format, then XOR encrypt the archive and then hides inside PNG/GIF image file format (Image Polyglots). The JavaScript embedded within the HTML will download the PNG/GIF file and store it in the cache. Following this, the JavaScript will extract the data embedded in the PNG/GIF, assemble it, perform XOR decryption, and then store it as an in-memory blob.

[https://github.com/TheCyb3rAlpha/BobTheSmuggler](https://github.com/TheCyb3rAlpha/BobTheSmuggler){:target="_blank" rel="noreferrer noopener"}

[https://www.helpnetsecurity.com/2024/02/29/bobthesmuggler-open-source-tool-undetectable-payload-delivery/](https://www.helpnetsecurity.com/2024/02/29/bobthesmuggler-open-source-tool-undetectable-payload-delivery/){:target="_blank" rel="noreferrer noopener"}

{% include links.html %}

