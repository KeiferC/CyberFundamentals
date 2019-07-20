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

The shadow file contains one entry per line in the format:

```
<a>:$<b>$<c>$<d>:<e>:<f>:<g>:<h>:<i>:<j>:<k>

<a>     Username
<b>     Encryption algorithm ID number
                1       = MD5
                2       = Blowfish
                2a      = eksBlowfish
                5       = SHA-256
                6       = SHA-512
<c>     Salt value
<d>     Hashed password and salt value
<e>     Days since 1 Jan. 1970 since the password was last changed
<f>     Minimum # of days required between password changes
<g>     Maximum # of days for the password to remain valid
<h>     # of days before password expiration date to warn user
<i>     # of days that the account has been disabled after expiration date
<j>     # of days since 1 Jan. 1970 since the expiration date
<k>     Unused field / reserved for future use

Ex.
root:$6$fnfffc$ljkFAfhlewFASDXf.#af:13064:0:99999:7:::

Username:       root
Algorithm:      SHA-512
Salt:           fnfffc
Hashed:         ljkFAfhlewFASDXf.#af
...

Note:           If the password field starts with an exclamation mark
                (e.g. root:!$6$fnfffc$ljkFAfhlewFASDXf.#af:...), the 
                password is locked and the user cannot use it to login.

                If the password field contains an asterisk
                (e.g. root:*:...), the account is also locked, but the 
                password is hidden.
```

### Techniques
**_Brute-Force Attack_**

The attacker systematically submits all possible passwords and usernames 
until the correct one is found. The time it takes to find the correct 
passwords is an exponential function of the length of the password. The 
attacker can also focus on determining the key (often generated using a 
key derivation function (KDF)). Successful brute-forcing is dependent on 
prioritizing values to test, time, processing power, and energy efficiency.

**_Dictionary Attack_**

A dictionary attack is a type of brute-force attack in which the attacker 
tests all values in a list of strings (e.g. a dictionary), AKA a wordlist. 
Wordlists may consist of previously cracked credentials or keys, commonly 
used credentials, etc.

Good database of wordlists:
[SecLists](https://github.com/danielmiessler/SecLists)

**_Rainbow Table Attack_**

A rainbow table is a pre-computed lookup table containing hash values that 
are pre-matched to possible plaintext passwords. An attacker using a rainbow 
table does not need to retrieve the actual plaintext password, but simply 
needs to find a hash that matches the plaintext password. Rainbow table 
attacks are faster than classic brute-forcing techniques, yet they require 
much more storage. 

To defend against rainbow table attacks, use a KDF with long salts.

**_Spidering_**

Spidering is a technique in which attackers use web spiders to crawl 
websites for information that may be useful for guessing passwords / 
prioritizing passwords to test.

### Tools
**_John the Ripper_**

A free password cracking tool.

Site: [openwall.com/john](https://www.openwall.com/john/)

```bash
# Usage
foo@bar:~$ unshadow passwd shadow > crackme.txt # merges into txt file
foo@bar:~$ john crackme.txt
foo@bar:~$ john --wordlist=<FILE> crackme.txt # uses given wordlist
```

**_Cain & Abel_**

A password recovery tool for Microsoft Operating Systems.

Site:
[oxid.it](https://web.archive.org/web/20190603235413/http://www.oxid.it/cain.html)
(archived)

**_Hashcat_**

FOSS password cracker.

Site: [hashcat.net](https://hashcat.net/hashcat/)

**_THC Hydra_**

Another FOSS password cracker.

Site: [sectools,org](https://sectools.org/tool/hydra/)

**_L0phtCrack_**

A powerful commercial password cracker,

Site: [l0phtcrack.com](https://www.l0phtcrack.com/)

**_RainbowCrack_**

A free rainbow table used for cracking passwords.

Site: [project-rainbowcrack.com](http://project-rainbowcrack.com/)

