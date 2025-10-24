---
title: OSINT Networks
last_updated: July 3, 2016
sidebar: home_sidebar
permalink: osint_networks.html
tags: [reconnaissance] 
summary: A list of tools, with links for gaining information about networks and devices
toc: false
folder: osint
---

This page provides a curated list of essential tools for conducting Open-Source Intelligence (OSINT) focused on network infrastructure and asset discovery.

<br/>
## RDAP - (The new WHOIS) (Free)
[https://rdap.dev/](https://rdap.dev/){:target="_blank" rel="noreferrer noopener"}

RDAP (Registration Data Access Protocol) is the modern successor to the WHOIS protocol. It provides a standardized, secure, and machine-readable way to query registration data for internet resources like domain names, IP addresses, and Autonomous System (AS) numbers. For an OSINT investigator, RDAP offers a more reliable and structured format for discovering ownership details, contact information, and related network blocks associated with a target.

<br/>

## OSINT Framework (Free)
[https://osintframework.com/](https://osintframework.com/){:target="_blank" rel="noreferrer noopener"}

The OSINT Framework is not a tool itself, but an interactive web-based directory that maps out a vast collection of OSINT tools and resources. It organizes them by category, such as username, email address, domain name, or social media. This framework is an invaluable starting point for any investigation, helping you discover the right tool for a specific data-gathering task and explore different avenues of inquiry.

<br/><br/>

## OWASP Amass (Free)
[https://github.com/owasp-amass/amass](https://github.com/owasp-amass/amass){:target="_blank" rel="noreferrer noopener"}

The OWASP Amass Project is a powerful and comprehensive tool for network mapping and attack surface discovery. It uses a wide array of techniques, including scraping data from APIs, web archives, and search engines, as well as active DNS reconnaissance, to uncover an organization's external assets. For a security researcher, Amass is critical for building a complete picture of a target's infrastructure, including subdomains, IP ranges, and other associated network resources.

<br/><br/>

## Shodan (Paid with a free option)
[https://www.shodan.io/](https://www.shodan.io/){:target="_blank" rel="noreferrer noopener"}

Often called "the search engine for hackers," Shodan is an indispensable tool that indexes internet-connected devices and systems. Unlike a web search engine, it allows you to find specific types of devices (webcams, routers, servers), exposed services, and vulnerable systems based on banner information, port, location, and other metadata. It provides a bird's-eye view of an organization's exposed assets and potential security weaknesses.

<br/><br/>

## Censys (Paid with a free option)
[https://search.censys.io/](https://search.censys.io/){:target="_blank" rel="noreferrer noopener"}

Censys is a platform that continuously scans the entire internet to provide a complete and up-to-date map of every reachable server and device. Its particular strength lies in its deep analysis of SSL/TLS certificates, which can reveal connections between an organization's domains and infrastructure that are not obvious through other means. It is excellent for discovering subdomains and understanding the security posture of a target's web-facing assets.

<br/><br/>

## Maltego (Paid with a free option)
[https://www.maltego.com/](https://www.maltego.com/){:target="_blank" rel="noreferrer noopener"}

Maltego is a graphical link analysis tool used for gathering and connecting disparate pieces of information. Starting with a single data point, such as a domain name or IP address, Maltego can run a series of "transforms" to discover and visually map out related infrastructure, DNS records, WHOIS information, and even associated people and organizations. It excels at turning raw data into actionable intelligence by visualizing complex relationships.

<br/><br/>

{% include note.html content="sources include: <br/>[https://www.helpnetsecurity.com/2023/08/22/open-source-osint-tools/](https://www.helpnetsecurity.com/2023/08/22/open-source-osint-tools/)<br/>" %}

