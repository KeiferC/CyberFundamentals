# Week 1 - Basic Networking

## Why Networking and NetSec?
- The Trinity of Trouble - "Connectivity"
- Critical to understanding the cyber attribution problem


## The Cyber Attribution Problem
- __Attribution__: the action of regarding something as being cause by a person
  or a thing

### Tradtional Warfare - How Do you Attribute an Act of War?
- Uniform of attackers
- Types of weapons used by attackers
- Direction of strike
- etc.

### Why Is Cyber Attribution a Mess?
- Often no physical action to observe
- Tools to cover tracks
- Source hopping
- Lack of effective tools / processes for determining attribution
- Ethical and legal questions about approaching cyber attribution


## What Is Networking?

### Definitions
- __Networking__: Two or more computers talking to each other

- __Client__: A program running on a personal computer 
  - E.g. Web browser

- __Server__: A computer running web server software on a remote computer 
  - Delivers information to other clients
  - E.g. Apache HTTP Server

- __Internet__: The world's largest computer network

- __World Wide Web__: A collection of web sites, pages, and content
  - AKA the "web"

- __Localhost__: home; this computer

- __Socket__: an endpoint instance defined by an IP address and a port in the
  context of a particular TCP connection or of a listening state

- __Port__: a virtualization indentifier defining a service endpoint
  - As distinct from a service instance endpoint (aka session ID)
  - Represented as a number

- __Packet__: a unit of data
  - A data stream (e.g. video, web page, etc.) is comprised of many packets
  - In general a packet contains
    - Source and destination IP addresses (in IP layer)
    - Source and destination port numbers (in TCP layer)
    - MAC address (in Data Link layer)
    - Time To Live (TTL; in IP layer)
    - Payload

- __.pcap__: a common file extension for packet captures
  - Is commonly used in apps like Wireshark, ettercap, and tcpdump
  - A 100 mb PCAP file contains tens of thousands of packets

- __Network sniffing__: looking at network traffic and analyzing packets
  - Most traffic on a network is still in plaintext
  - Uses of network sniffing
    - Troubleshoot networking issues
    - Record communications
    - Catch sensitive information

### The TCP Three-Way Handshake
![Diagram depicting the TCP Three-Way Handshake](./media/3-way-handshake.png)

### The Two Types of Networks
1. __Unswitched__: Packets flow through all devices on the network, but you only
look at the packets addressed to you
2. __Switched__: Packets are directed to the addressed devices
  - Most common type of network today
  - Note: in regards to internet systems, switched networks refer to
    packet-switched networks in which information is sent in packets and are
    ordered at the endpoints. In circuit-switched networks, electronic
    information travels through circuits and are directed with physical switches


## The OSI Model
- TODO

### The Seven Layers of the OSI Model
- TODO

### The Application Layer
#### Domain Name Systems (DNS)
- TODO

### The Transport Layer
#### Transport Control Protocol (TCP)
- TODO

#### User Datagram Protocol (UDP)
- TODO

### The Network Layer
#### Internet Protocol (IP)
- TODO

#### Internet Control Message Protocol (ICMP)
- TODO

### The Data Link Layer
#### Ethernet
- TODO

#### Address Resolution Protocol (ARP)
- TODO

