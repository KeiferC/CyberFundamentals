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

```php
<!-- Example -->
<?php
        $conn = mysql_connect("127.0.0.1", "root", "pass");
?>
```

### Hard Coded Credentials
If someone hard-codes their credentials in the code, anyone can get access.

Defense - Don't hard-code credentials. Store credentials in system environment 
variables.

```php
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
Entering SQL queries into data input fields to access and modify 
database information. Attack vectors include URL parameters and form 
fields.

Defense - Sanitize your inputs (e.g. filter out single and double quotes).
Use prepared statments. Apply the principle of least privilege to database
access.

```
# Example URL with SQLi in query parameter
http://domain-name.com/accounts.php?q='); SELECT * FROM Users WHERE UserId = 105 OR 1=1;-- 
```

### Bypassable Input Restrictions
Using web proxies to intercept the HTTP request in order to modify values 
before using the proxy to send the request to the server. Can be applied 
on practically all input forms.

Defense - Server-side input validation. Avoid use of hidden values
(e.g. `<input type"hidden" name="">`) for storing private info.

*Cookie Tampering*: In order to defend against cookie tamperies, avoid storing 
important inforamtion (e.g. passwords) and adminstrator checks (bool values) 
in cookies.

### Cross-Site Request Forgery (CSRF)
AKA XSRF, manipulating a logged-in user tp execute commands without them 
knowing. For example, an attacker can use social engineering to get a 
target to click a legitimate link to a website that they're already 
logged-in to, yet the url contains parameters that would execute commands.

Defense - Verify same-origin requests, require user interactions for 
transactions, append unpredicatable challenge tokens to requests.

```
# Example CSRF URL
https://legit-domain.com/transfer.do?acct=JOHNCENA&amount=350
```

### Traversable Directories
Vulnerability occurs when the server configuration doesn't take into 
account relative directory traversal sequences (e.g. "../"). In other
words, traversal vulnerabilities are a result of improper server 
configurations. Being able to map out the directory structure of a 
web app allows the attacker to find attack vectors.

Defense - Input validation and proper server configuration.

```
# Example 
http://domain.com/../../../../etc/passwd
```

### Command Injections
Running system commands (e.g. `ls`, `cat`, `ping`, `chmod`, etc.) on a 
web server.

Defense - Input validation.

```
# Example
http://domain.com/cgi-bin/userData.pl?doc=/bin/ls
```

### Remote and Local File Inclusion
Occurs when users can input values without any validation, allowing them 
to open other files.

Defense - Input validation. Turn off `allow_url_fopen` and `allow_url_include` 
in `php.ini`).

```
# Example - Remote File Inclusion
https://domain.com/index.php?page=https://duckduckgo.com/

# Example - Local File Inclusion
http://domain.com/index.php?page=/etc/passwd
```

### In other words, never trust user input!

## Tools - Web Proxies
Web proxies intercept HTTP requests and responses so that the attacker 
can modify header fields and bodies. Can also be used to log HTTP traffic.

### Burp Suite
A graphical tool used for web security. 

Example - modifying values: 

1. Intercept HTTP request after pressing "Go!". 
2. Change field values under "/Proxy/Intercept/".
3. Press "Forward".

Site: [portswigger.net](https://portswigger.net/burp/)

### OWASP Zed Attack Proxy (ZAP)
A Java-based FOSS similar to Burp Suite. Includes a vuln scanner and spiders.

Site: [github.com](https://github.com/zaproxy)

### Tamper Data
A web proxy add-on for the Firefox web browser.

Site:
[addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/tamper-data-for-ff-quantum/)

### mitmproxy
A command-line FOSS web proxy.

Site: [mitmproxy.org](https://mitmproxy.org/)


## Tools - Penetration Testing
### sqlmap
A pentesting FOSS that automates the process of detecting and exploiting 
SQLi flaws.

Site: [sqlmap.org](https://sqlmap.org/)


### DIRB
A single-threaded web content scanner, used for discovering directories 
and files.

Site: [tools.kali.org](https://tools.kali.org/web-applications/dirb)

### DirBuster
A multi-threaded web content scanner. Similar to DIRB

Site: [tools.kali.org](https://tools.kali.org/web-applications/dirbuster)

### GoBuster
A web content scanner. Unlike DIRB and DirBuster, is built with Go instead of
Java.

Site: [github.com](https://github.com/OJ/gobuster)

## Tools - Playgrounds
Below is a list containing legal places for practicing web attacks. NEVER 
DEPLOY THE FOLLOWING WEB APPS!!!

- [Metasploitable 2](https://sourceforge.net/projects/metasploitable/): An 
  intentionally vulnerable Linux VM containing several vulnerable web apps 
  (including DVWA, Mutillidae, etc.).
- [Damn Vulnerable Web Application (DVWA)](http://www.dvwa.co.uk/)
- [Mutillidae](https://sourceforge.net/projects/mutillidae/)
- [WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)

