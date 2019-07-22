# Web Security

### Contents

[Why Web Security?](#why-web-security)

[Vulnerabilities](#vulnerabilities)

[Tools - Web Proxies](#tools---web-proxies)

[Tools - Penetration Testing](#tools---penetration-testing)

[Tools - Playgrounds](#tools---playgrounds)

*[Back](../week3-websecurity#week-3---web-security)*


## Why Web Security?
According to [Help Net
Security](https://www.helpnetsecurity.com/2017/02/14/web-application-vulnerabilities/),
69% of web apps contain data exposure vulnerabilities, and 55% contain CSRF 
vulnerabilities. 

> 25% of web apps still vulnerable to eight of the OWASP Top 
Ten

### OWASP Top 10
The Open Web Application Security Project (OWASP) is a non-profit, 
international organization focused on application security. Their Top
10 Project aims to inform the public about the consquences on the most 
important web app security vulnerabilities.

From OWASP Top 10 - 2017:

1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Acces Control
6. Security Misconfiguration
7. Cross Site Scripting (XSS)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging and Monitoring

For more details, see the
[site](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

### CWE/Sans Top 25 Most Dangerous Software Issues
The 25 issues are broken down into the following three categories:

1. Insecure Interactions between Components
2. Risky Resource Management
3. Porous Defenses

For more details, see the [site](https://www.sans.org/top25-software-errors).


## Vulnerabilities

### No Principle of Least Privilege
If a server configuration uses root access, anyone who gains root access 
can do anything they want. 

Defense - Create separate users for web apps in order to limit access 
to certain resources and operations (AKA applying the principle of least 
privilege).

```html
<!-- Example -->
<?php
        $conn = mysql_connect("127.0.0.1", "root", "pass");
?>
```

### Hard Coded Credentials
If someone hard-codes their credentials in the code, anyone can get access.

Defense - Don't hard-code credentials. Store credentials in system environment 
variables/

```html
<!-- Example -->
<?php
        $conn = mysql_connect("127.0.0.1", "AzureDiamond", "hunter2");
?>
```

### Cross-Site Scripting (XSS)
Entering script code into data input fields to be executed on someone's 
web browser. Allows an attacker to falsify presented content, steal 
cookie information, inject malicious code, and generally annoy everyone.

Defense - Sanitize your inputs (e.g. change `<` into `&lt;`).

```html
<!-- Example XSS Payload -->
<script>window.document.getElementById("SOME-ID").innerHTML='<img
src="https://i.kym-cdn.com/photos/images/original/001/018/186/b49.gif"
alt="hackerman"/>';</script>
```

### SQL Injections (SQLi)
TODO

### Bypassable Input Restrictions
TODO

*Cookie Tampering*

TODO

### Cross-Site Request Forgery (CSRF)
AKA XSRF, TODO 

### Traversable Directories
TODO

### Command Injections
TODO

### Remote and Local File Inclusion
TODO


## Tools - Web Proxies
Web proxies intercept HTTP requests and responses so that the attacker 
can modify header fields and bodies. Can also be used to log HTTP traffic.

### Burp Suite
TODO

### OWASP Zed Attack Proxy (ZAP)
TODO

### Tamper Data
TODO

### mitmproxy
TODO


## Tools - Penetration Testing
### sqlmap
TODO


## Tools - Playgrounds
Below is a list containing legal places for practicing web attacks. NEVER 
DEPLOY THE FOLLOWING WEB APPS!!!

- [Metasploitable 2](https://sourceforge.net/projects/metasploitable/): An 
  intentionally vulnerable Linux VM containing several vulnerable web apps 
  (including DVWA, Mutillidae, etc.).
- [Damn Vulnerable Web Application (DVWA)](http://www.dvwa.co.uk/)
- [Mutillidae](https://sourceforge.net/projects/mutillidae/)
- [WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
