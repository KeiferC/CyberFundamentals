# The Web

### Contents
[What Is the Web?](#what-is-the-web)

[The Hypertext Transfer Protocol (HTTP)](#the-hypertext-transfer-protocol-http)

[Websites](#websites)

*[Back](../week3-websecurity#week-3---web-security)*


## What Is the Web

Servers containing resources (e.g. images, text, websites, memes, etc.) and 
the means of processing and delivering said resources.

__Client__: A program running on a computer (e.g. a web browser).

__Server__: A computer running web server software. Delivers information 
to other clients (e.g. Nginx, Apache HTTP Server, Microsoft IIS).

### Uniform Resource Locators (URLs)

Uniform Resource Locators (URLs) are a subset of Uniform Resource Identifiers 
(URIs) that tell clients how to access a resource. Because the RFCs suck, there 
is often much confusion over what defines a URL vs what defines a URI. At 
the end of the day, a URI is an identifier (the name of a resource), whereas 
a URL is a locator (how to get the resource). In other words, URIs standardize 
the names of files on web servers. URLs standardize the means of obtaining 
files on a web server. URLs use the following syntax:

```
<protocol>://<server_name>/[<directory>/[<file.type>[?query][#fragment]]]

<protocol>      Layer 7 protocols (e.g. http, ftp, mailto, file, etc.)
<server_name>   Either in human-readable form or in an IP address form
<directory>     Directory in which resource exists
<file.type>     Resource to be retrieved
[?query]        Key-value pairs separated by ampersands
[#fragment]     A specific location in the retireved resource

Ex.
https://www.google.com/search?q=bob+ross&lr=lang_zh-TW

<protocol>      https
<server_name>   www.google.com
<direcotry>     /
<file>          search
[?query]        q=bob+ross&lr=lang_zh-tw
                (searches for "bob ross" and returns results in traditional
                Chinese)
[#fragment]     
```

Note: the server name / domain name is often input as an easily read 
string (e.g. "duckduckgo.com"). Once the user presses the "enter" button, 
the domain name gets sent to a Domain Name System (DNS) server of which 
looks up the actual IP address that corresponds to the readable string 
(e.g. 107.20.240.232). A user can also enter the IP address by itself 
(e.g. https://107.20.240.232).


## The Hypertext Tranfer Protocol (HTTP)

The Hypertext Transfer Protocol is a layer 7 (application) protocol that 
specifies how data is communicated through the Web.

Note: HTTPS is HTTP on a TLS / SSL session.

HTTP consists of two main processes: request and response.

### HTTP Request
A HTTP request is a message a client sends to a server. It consists of 
two main components: the HTTP request header and the HTTP request body.

__HTTP Request Header__: Contains details regarding the request, including
the method being used (e.g. GET, POST, DELETE, TRACE, etc.).

__HTTP Request Body__: Consists of data to be send to the server (including
query string key-value pairs)

Example HTTP Request:
```
POST https://github.com HTTP/1.1
Host: github.com
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
DNT: 1
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"
Cache-Control: max-age=0

key=value&second-key=second-value
```

### HTTP Response
A HTTP response is a message a server sends to a client in response to a 
HTTP request. It consists of two main components: the HTTP response header 
and the HTTP response body.

__HTTP Response Header__: TODO

__HTTP Response Body__: TODO

Example HTTP Response:
```
HTTP/2.0 418 I'm a teapot.
content-type: text/html; charset=UTF-8
trailer: X-Google-GFE-Current-Request-Cost-From-GWS
strict-transport-security: max-age=31536000
content-encoding: br
date: Tue, 20 April 1971 00:00:00 UTC
server: gws
x-xss-protection: 0
x-frame-options: SAMEORIGIN
alt-svc: quic=":443"; ma=2592000; v="46,43,39"
X-Firefox-Spdy: h2

<!doctype html><html lang="en"> <meta charset="utf-8"><meta
content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport">
<title>Error 418 (I’m a teapot)!?</title><b>418.</b> <ins>I’m a
teapot.</ins></p> <p>The requested entity body is short and stout. <ins>Tip me
over and pour me out.</ins></p> <div id="teaset"><div id="teabot"></div><div
id="teacup"></div></div></html>
```

### HTTP Cookies
TODO


## Websites

In general, the architecture of a website consists of three tiers: 
the client, the server, and the database.

### The Client
The client (e.g. browser) handles the presentation tier of the
three-tier architecture. This tier's principle role is to display 
information (e.g. a web page) to the user. If the client submits 
information to be processed, the information gets sent to a server.

For example, a user types a URL in a client's (e.g. Firefox web browser) 
address bar and presses "enter". In HTTP terms, this means that the 
user is requesting to GET the web page associated with the URL. The client 
looks up the location of the server containing the requested web page, 
then connects with the server, retrieves the web page, and then displays 
it.

Web pages are typically built using HTML, CSS, and JS.

*The Domain Name System (DNS)*

When a user types in a URL and clicks enter, the domain name first 
gets sent to domain name servers in order to find the location of the 
server (IP address) associated with the domain name. One can think of 
the DNS as a yellow pages book.

### The Server
The server (e.g. Apache HTTP, Nginx) handles the logic tier of the 
three-tier architecture. This tier's principle role is to process 
information and requests sent from the client. When requested, the 
server also retrieves information from a database to be processed.

Oftentimes, there is confusion regarding the difference between 
web servers and server-side web frameworks. Both exist in the 
logic tier and occasionally have overlapping functionalities. In 
general, a web server handles processes relating to the network, such 
as load balancing, resource indexing, HTTP protocol management, etc.
Frameworks are suites of tools used for processing data and requests. 
One can think of frameworks as used for managing callback functions 
to user inputs. Both servers and frameworks are needed for a web 
application. Both are also referred to as servers and thus are mainly 
distinguished based on the context in which they are referred. When 
talking about web application functionality and server-side development, 
one is referring to the processing related to the use of frameworks. 
When one is talking about web app deployment and DDoS mitigation, one 
is referring to web servers.

Example web servers include Nginx and Apache HTTP. Example frameworks 
include Node.js and Django.

### The Database
The database handles the storage of information. The structure of a 
database in critical to information processing and retrieval.

Example databases include SQL databases and MongoDB.

### The Three-Tier Architecture
In a nutshell, the three-tier architecture involves the presentation tier, 
the logic tier, and the data tier. 

Source:
[Wikimedia](https://commons.wikimedia.org/wiki/File:Overview_of_a_three-tier_application_vectorVersion.svg)

![Diagram depicting the three-tier architecture as described
above](./media/3ta.png)
