# Cryptography and Cyber Security

### Contents
[Cryptography and Networks](#cryptography-and-networks)

[Password Cracking](#password-cracking)

*[Back](../week2-cryptography#week-2---cryptography)*


## Cryptography and Networks
### Transport Layer Security (TLS)
Transport Layer Security (TLS), and its deprecated predecessor Secure 
Socket Layer (SSL), is a layer 5 (session) cryptographic protocol used 
to provide private connections and to ensure data integrity.

Privacy - TLS uses symmetric cryptography to encrypt data transferred 
between computers. The keys are generated using an ephemeral 
Diffie-Hellman (DHE) key exchange during the TLS handshake, 

Integrity - TLS uses asymmetric cryptography to ensure data integrity 
by using public keys to determine the authenticity of the communicating 
computers. In regards to web browsing, the browser stores public keys 
corresponding to trusted sources. The public keys are used to verify the 
identity of a website by decrypting the website TLS certificate's 
private key (issued by the Certificate Authority).

TLS consists of two protocols, the TLS handshake and the TLS record: 

1. The TLS handshake is responsible to cipher suite negotiation, identity 
authentication, and key exchange.

2. The TLS record is responsible for using the keys generated in the 
handshake to encrypt, decrypt, divide, and reassemble data. The TLS 
record operates at the endpoints of a TCP session.

## Password Cracking
Any password is crackable given enough time.

### Locations
There are two files of interest on a typical Linux system:

__`/etc/passwd`__ contains users' information and is required for logins,

__`/etc/shadow`__ contains users' encrypted passwords and related details.

### Techniques
**_Brute-forcing_**

TODO

**_Using Wordlists_**

TODO

**_Using Rainbow Tables_**

TODO

### Tools
**_John the Ripper_**

TODO

**_Cain & Abel_**

TODO

**_Hashcat_**

TODO

**_THC Hydra_**

TODO

**_L0phtCrack_**

TODO
