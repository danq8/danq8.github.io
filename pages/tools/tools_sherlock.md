---
title: Sherlock
keywords: sherlock, prevention, reconnaissance, social, osint, username
last_updated: October 24, 2025
tags: [prevention, reconnaissance, social, osint]
summary: "Hunt down social media accounts by username across social networks"
sidebar: home_sidebar
permalink: tools_sherlock.html
toc: false
folder: tools
---

Sherlock is a powerful command-line tool used to hunt down social media accounts by username across a vast number of social networks. It's a fundamental utility for any OSINT investigation focused on an individual, as it helps to quickly build a map of their digital footprint.

[https://github.com/sherlock-project/sherlock](https://github.com/sherlock-project/sherlock){:target="_blank" rel="noreferrer noopener"}

### Full Usage Options
````bash
usage: sherlock [-h] [--version] [--verbose] [--folderoutput FOLDEROUTPUT] [--output OUTPUT] [--tor] [--unique-tor] [--csv] [--xlsx] [--site SITE_NAME] [--proxy PROXY_URL] [--dump-response] [--json JSON_FILE] [--timeout TIMEOUT] [--print-all] [--print-found] [--no-color] [--browse] [--local] [--nsfw] USERNAMES [USERNAMES ...]
`````

### Common Usage Examples

````bash
# 1. Basic Search for a Single Username
# This is the most common use case. Sherlock will check all 
# supported sites for the given username.
sherlock dan_the_man

# 2. Search for Multiple Usernames
# You can check for several usernames in a single command.
sherlock user1 user2 user3

# 3. Save Results to a File
# Save the found accounts to a text file for easier analysis.
sherlock dan_the_man --output results.txt

# Or save the results to a CSV file.
sherlock dan_the_man --csv

# 4. Search Through Tor
# Anonymize your search traffic by routing it through the Tor network.
# (Requires Tor to be running on your system).
sherlock dan_the_man --tor

# 5. Search a Specific Site
# If you are only interested in a particular social media site, 
# you can specify it directly.
sherlock dan_the_man --site twitter
`````

{% include links.html %}

