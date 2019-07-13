# Cryptography in a Nutshell

### Contents
[Why Cryptography?](#why-cryptography)

[The Golden Rule](#the-golden-rule)

[What Is Cryptography?](#what-is-cryptography)

[The Cryptosystem](#the-cryptosystem)

[Keys](#keys)

[Encryption Algorithms](#encryption-algorithms)

*[Back](../week2-cryptography#week-2---cryptography)*


## Why Cryptography?
The "C" and the "I" in the CIA Triad


## The Golden Rule
DON'T ROLL YOUR OWN CRYPTO!!!

## What Is Cryptography?
__Cryptography__: The process of communicating secretly through the use 
of ciphers

__Cryptanalysis__: The process of cracking or deciphering encrypted info

__Cryptology__: The study of cryptography or cryptanalysis

__Cleartext / plaintext__: Unencrypted infomation

__Encrypt__: To convert info or data into code to prevent unauthorized
access

__Decrypt__: To convert an encoded or unclear message into plaintext

__Cipher__: An algorithm to perform encryption and / or decryption

__Cryptosystem__: A suite of algorithms used to perform encryption and / or 
decryption

__Base64__: An encoding scheme used for representing binary data using 
printable (text) characters
- Used for HTTP Basic Authentication


## The Cryptosystem
A cryptosystem can be formalized as a tuple consisting of 5 elements: 
P, C, K, E, and D (see mathematical definition below). 'P' represents 
a set containing information in plaintext. 'C' represents a set 
containing information in ciphertext. 'K' represents a set containing 
keys. 'E' represents a set of functions such that for every key 'k', 
there exists a function from 'P' to 'C'. In other words, E represents 
a set of functions, each corresponding to a unique key, who encrypt 
information in plaintext. 'D' represents a set of functions such that 
for every key 'k', there exists a function from 'C' to 'P'. In other 
words, 'D' represents a set of funcions, each corresponding to a 
unique key, who decrypts information in ciphertext.

Therefore, a cryptosystem contains information in plaintext, information 
in ciphertext, keys, encryption functions, and decryption functions.

![Mathematical definition of a cryptosystem](./media/cryptosystem.png)

### Evaluating the Security of a Cryptosystem
There only exists one perfectly secure algorithm: the One-Time Pad (OTP). 
All other crypto algorithms are not perfectly secure. However, they 
do not need to be perfectly secure; they just need to be secure enough 
to the point where attempting to break the cipher is just not worth it.
In other words, to evaluate the security of a cryptosystem is to make a 
cost-benefits analysis of the system in question, The higher the ratio 
of cost to benefits, the more secure the algorithm is. There are two 
main tradeoffs to be considered regarding cipher breaking:

1. When the cost of breaking the cipher exceeds the value of the 
   encrypted information.

2. When the time required the break the cipher exceeds the useful 
   lifetime of the information.

However, it is difficult to estimate the cost and time required to 
break a cipher. Where brute-forcing may take several lifetimes, stealing 
a key may take several minutes.

## Keys
In the context of cryptography, a key defines the transformation 
between plaintext and ciphertext. For encryption algorithms, the 
key specifies the transformation *from* plaintext *to* ciphertext. 
For decryption algorithms, the key specifies the transformation 
*from* ciphertext *to* plaintext.

> Il faut qu’[un système cryptographique] n’exige pas le secret, 
et qu’il puisse sans inconvénient tomber entre les mains de l’ennemi. -
__Auguste Kerckhoffs, ["La cryptographie
  militaire"](https://petitcolas.net/kerckhoffs/la_cryptographie_militaire_i.htm)__

In English:
> It is paramount that a cryptosystem does not rely on its key, and that 
there would be no problems if the cryptosystem falls into the hands of the 
enemy. - __Auguste Kerckhoffs, "Military Cryptography"__

In other words, a good cryptosystem maintains security, even in the hands 
of others, as long as the key is kept safe.

### Uses of Keys
**_The Caesar Cipher_**

The Caesar cipher is a simple encryption algorithm used by Julius Ceasar to
protect his correspondances. To encrypt information, one would rotate the 
alphabet by a certain number, therefore mapping each "real" letter with 
a "fake" letter. For example, the ROT13 cipher is a version of the Caesar 
cipher in which the alphabet is rotated 13 spaces

Let 'A' = 1, 'B' = 2, ..., 'Z' = 26. To encrypt, one rotates the alphabet 
13 spaces so that 'A' = 13, 'B' = '14', ..., 'Z' = 12. Next, one maps the 
the old alphabet to the new alphabet such that a letter in the old 
alphabet replaces its corresponding letter in the new alphabet. For 
example, in the old alphabet, 'M' = 13. Therefore, 'M' will replace 'A' 
in the encrypted text. Hence, if I were to encrypt "ABC" using ROT13,
the resulting string would be "MNO". 

It is somewhat a pain trying to decode a piece of text encrypted using 
the Caesar cipher if one does not know how many spaces the alphabet was 
rotated. In the case of a ROT13 cipher, once one realizes that the 
alphabet was rotated 13 spaces, it becomes fairly easy to decode.

The number of spaces the alphabet is rotated is the key. Therefore, the 
ROT13 cipher contains the key 'k' = 13.

**_One-Time Pad (OTP)_**

TODO


## Encryption Algorithms

There are three main types of encryption algorithms: one-way algorithms, 
symmetric-key algorithms, and public-key algorithms.

### One-Way Algorithms
AKA hash functions, such algorithms are one-way as they can only encrypt 
information, not decrypt. Therefore there is no secret key. The function 
maps a variable length string of data to produce a fixed-length output 
in a deterministic, public, and random manner,

The perfect hash faction
- Is one-way, and thus not decryptable
- Contains no collisions
- Exhibits true randomness
- Contains pre-image resistance, making it unfeasible to produce the entire
  hash space
- Makes it unfeasible to produce a string, given a hash result

Pros
- Good for verifying integrity

Cons
- MD5 (128-bit hash values) is not collision-resistant
- SHA1 (160-bit has value) is not collision-resistant

Uses
- For password storage
- As a checksum of software packages
- As digital signatures
- As Git commits

Example - Verifying the Integrity of a Download
```bash
foo@bar:~$ shasum -a 256 <EXCECUTABLE>
```

If the result does not match the provided checksum (SHA256 in this case), 
the download is either corrupted or was tampered.

**_MD5 (Insecure)_**

TODO

**_SHA1 (Insecure)_**

TODO

**_SHA256 & SHA512_**

TODO

### Symmetric-Key Algorithms
TODO

**_DES_**

TODO

**_AES_**

TODO

**_RC4_**

TODO

### Public-Key Algorithms
TODO

**_Diffie-Hellman (DH)_**

TODO

**_RSA_**

TODO

