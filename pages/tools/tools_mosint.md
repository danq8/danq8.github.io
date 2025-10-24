---
title: mosint
keywords: mosint, reconnaissance, detection, email osint
last_updated: October 24, 2025
tags: [reconnaissance, detection, osint]
summary: "An automated email OSINT tool to investigate target emails in a fast and efficient manner."
sidebar: home_sidebar
permalink: tools_mosint.html
toc: false
folder: tools
---

Mosint is an automated email OSINT (Open-Source Intelligence) tool written in Go. It is designed to investigate a target email address quickly and efficiently by consolidating data from multiple public services. For a security researcher, it's an excellent first step in footprinting an individual or checking for potential exposure.

### How It Works

Mosint takes a single email address as input and queries various databases and services to gather associated information. It then presents the findings in a clear, consolidated report.

### Key Information Gathered
*   **Verification:** Checks if the email address is valid and reachable.
*   **Data Breaches:** Scans services like HaveIBeenPwned to see if the email has been compromised in known data breaches.
*   **Associated Accounts:** Searches for connected accounts on social media platforms (e.g., Twitter, Instagram) and other services (e.g., GitHub, Spotify).
*   **Domain Information:** Retrieves DNS and WHOIS records for the email's domain.
*   **Password Leaks:** Looks for related passwords found in public pastebins or leaks.

### Installation & Usage

You can install Mosint if you have Go installed on your system:
````bash
go install -v github.com/alpkeskin/mosint/v3/cmd/mosint@latest
````

[https://github.com/alpkeskin/mosint](https://github.com/alpkeskin/mosint){:target="_blank" rel="noreferrer noopener"}


{% include links.html %}

