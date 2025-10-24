---
title: OWASP Amass
keywords: amass, prevention, reconnaissance, attack surface management
last_updated: October 24, 2025
tags: [prevention, reconnaissance, osint]
summary: "In-depth attack surface mapping and asset discovery"
sidebar: home_sidebar
permalink: tools_owasp_amass.html
toc: false
folder: tools
---

The OWASP Amass Project is a powerful framework for in-depth attack surface mapping and external asset discovery. It uses a wide array of techniques, including scraping data from APIs, web archives, and search engines, as well as active DNS reconnaissance, to uncover an organization's external assets.

For a security researcher, Amass is critical for building a complete picture of a target's infrastructure, including subdomains, IP ranges, and other associated network resources.

### Installation & Usage

You can install Amass if you have Go installed on your system:
````bash
go install -v github.com/owasp-amass/amass/v4/...@master
`````

[https://owasp.org/www-project-amass/](https://owasp.org/www-project-amass/){:target="_blank" rel="noreferrer noopener"}

[https://github.com/owasp-amass/amass](https://github.com/owasp-amass/amass){:target="_blank" rel="noreferrer noopener"}



{% include links.html %}

