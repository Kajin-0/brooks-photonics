# Security Policy

## Reporting a vulnerability

Please report suspected security vulnerabilities privately through the Brooks Photonics contact page:

https://brooks-photonics.com/contact/

Include enough information to reproduce and assess the issue, including the affected URL or file, observed behavior, expected behavior, and any proof-of-concept details needed to validate the report.

Please do not include customer data, export-controlled information, credentials, or other sensitive third-party material in an initial report.

## Scope

The public website is primarily static. Security reports concerning the following are in scope:

- unintended exposure of non-public material;
- cross-site scripting or script-injection paths;
- compromised or mutable build/deployment dependencies;
- exposed credentials or secrets;
- unauthorized modification paths affecting published site content;
- security issues in browser-based utilities hosted under brooks-photonics.com.

Reports that consist only of missing optional headers, generic scanner output without an exploitable condition, or denial-of-service testing against third-party infrastructure may be treated as informational.

## Safe testing

Use non-destructive techniques. Do not attempt denial of service, credential attacks, social engineering, destructive modification, or access to data that does not belong to you.
