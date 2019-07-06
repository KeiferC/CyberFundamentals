# Network Security

### Contents

[Ways of Attacking Networks](#ways-of-attacking-networks)

[Network Sniffing - An Introduction](#network-sniffing---an-introduction)

[Network Sniffing - Hardware Tools](#network-sniffing---hardware-tools)

[Network Sniffing - Software Tools](#network-sniffing---software-tools)

[Network Sniffing - Defense](#network-sniffing---defense)

[Network Scanning - An Introduction](#network-scanning---an-introduction)

[Network Scanning - Software Tools](#network-scanning---software-tools)

[Network Scanning - Defense](#network-scanning---defense)

[DDoS Attacks - An Introduction](#ddos-attacks---an-introduction)

[DDoS Attacks - Techniques](#ddos-attacks---techniques)

[DDoS Attacks - Defense](#ddos-attacks---defense)

[A Quick Note on Packet Spoofing](#a-quick-note-on-packet-spoofing)

*[Back](../week1-networks#week-1---networks)*


## Ways of Attacking Networks
- Sniffing
- Network reconnaissance
- Denial of Service (DoS)
- Impersonation (spoofing)
- Hijacking (information access, delivery tampering)


## Network Sniffing - An Introduction
__Network sniffing__: looking at network traffic and analyzing packets
  - Most traffic on a network is still in plaintext
  - Uses of network sniffing
    - Troubleshoot networking issues
    - Record communications
    - Catch sensitive information

__.pcap__: a common file extension for packet captures
  - Is commonly used in apps like Wireshark, ettercap, and tcpdump
  - A 100 mb PCAP file contains tens of thousands of packets

### Setting Up Your Lab
Step 1: Set your network card to promiscuous mode
- __Promiscuous mode__: a NIC mode that allows one to look at all packets
  regardless of destination address

Step 2: Disable the use of the ARP
```bash
# For Unix/Linux/Macs
foo@bar:~$ sudo ifconfig -i <INTERFACE> promisc -arp
```


## Network Sniffing - Hardware Tools
- A computer with wired or wireless networking (admin access required)
- __Span port__: AKA port mirroring; a network switch setting in which a copy of
  all packets transmitted to and from a source port are forwarded to a single 
  destination port
- __LAN tap__: A small physical device used for monitoring ethernet
  communications. Contains at least 3 ports: 2 for allowing normal
  communications traffic to move unimpeded; 1 for monitoring the traffic moving
  between the previous 2 ports
- __Network hub__: A network hardware device containing multiple I/O ports in
  which the input at one port outputs to all other ports. Used for unswitched
  networks


## Network Sniffing - Software Tools
### `tcpdump`
A command-line packet analyzer
```bash
# Usage
foo@bar:~$ sudo tcpdump -a <INTERFACE>

# Manual
foo@bar:~$ man tcpdump

# Ex. Reading a PCAP file
foo@bar:~$ tcpdump -r file.pcap

# Ex. Splitting a PCAP file into smaller, 10 mb files
foo@bar:~$ tcpdump -r old_file.pcap -w new_files -C 10
```

### Wireshark
An open source, free graphical and entensive packet analyzer, similar to `tcpdump`

Site: [wireshark.org](https://www.wireshark.org)

### `tshark`
A command-line version of Wireshark
```bash
# Manual
foo@bar:~$ man tshark

# Ex. Listing hosts in a PCAP file
foo@bar:~$ tshark -r file.pcap -1 -z hosts,ipv4
```

### `ettercap`
A graphical and command-line suite of man-in-the-middle (MITM) attack tools. 
Uses include:
- Capturing passwords
- Conducting MITM attacks
- Hijacking sessions

```bash
# Manual
foo@bar:~$ man ettercap

# Ex. Listing plaintext passwords captured in a PCAP file
foo@bar:~$ ettercap -T -r set3.pcap | grep "PASS:"
```

### `bettercap`
A ruby-based suite of MITM attack tools. Similar to `ettercap`

Site: [bettercap.org](https://www.bettercap.org)

### `dsniff`
A command line suite of network sniffing tools including: 
- `dsniff # sniffs passwords`
- `webspy # intercepts entered URIs`
- `mailsnarf # intercepts POP or SMTP-based mail`

```bash
# Usage
foo@bar:~$ sudo dsniff -i <INTERFACE>
```

Note: No longer maintained

### `ngrep`
`grep` for networks

Currently recognizes:
- IPv4/6
- TCP
- UDP
- ICMPv4/6
- IGMP
- etc.

Site: [ngrep.sourceforge.net](https://ngrep.sourceforge.net)

```bash
# Ex. Searching for text strings in a PCAP file
foo@bar:~$ ngrep -q -I file.pcap | grep -i github
```

## Network Sniffing - Sniffing Switched Networks
TODO


## Network Sniffing - Defense
TODO


## Network Scanning - An Introduction
TODO


## Network Scanning - Software Tools
### `fping`
TODO

### `nc`
TODO

### Shodan
TODO

### `nmap`
TODO


**_Nmap - Stealth Scanning_**

Three Stealth Scans
1. __Fin scan__: TODO
```bash
foo@bar:~$ #TODO
```
2. __NULL scan__: TODO
```bash
foo@bar:~$ #TODO
```
3. __XMAS scan__: TODO
```bash
foo@bar:~$ #TODO
```

**_Nmap - Decoy Scanning_**

TODO


## Network Scanning - Defense
TODO


## DDoS Attacks - An Introduction
TODO

### Definitions
- TODO

## DDoS Attacks - Techniques
### SYN Flood
TODO

> __Teardrop__. TODO

### Ping of Death
TODO

### ICMP Flood
TODO

> __Smurf Attack__. TODO

### UDP Flood
TODO

### DNS Amplification
TODO

> __Mirai and the Dyn Attack__. TODO


## DDoS Attacks - Defense
### Defending Against a SYN Flood
TODO

### Defending Against an ICMP Flood
TODO


## A Quick Note on Packet Spoofing
TODO
