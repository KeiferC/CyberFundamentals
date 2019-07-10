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
TODO


## The Golden Rule
TODO


## What Is Cryptography?
__Cryptography__: TODO

__Cryptanalysis__: TODO

__Cryptology__: TODO

__Cleartext / plaintext__: TODO

__Encrypt__: TODO

__Decrypt__: TODO

__Cipher__: TODO

__Cryptosystem__: TODO

__Base64__: TODO


## The Cryptosystem
TODO

![Mathematical definition of a cryptosystem](./media/cryptosystem.png)

## Keys
In the context of cryptography, a key defines the transformation 
between plaintext and ciphertext. For encryption algorithms, the 
key specifies the transformation *from* plaintext *to* ciphertext. 
For decryption algorithms, the key specifies the transformation 
*from* ciphertext *to* plaintext.

> Il faut qu’[un système cryptographique] n’exige pas le secret, 
et qu’il puisse sans inconvénient tomber entre les mains de l’ennemi. - __Auguste Kerckhoffs, [‘La cryptographie
  militaire’](https://petitcolas.net/kerckhoffs/la_cryptographie_militaire_i.htm)__

In English:
> It is paramount that a cryptosystem does not rely on its key, and that 
there would be no problems if the cryptosystem falls into the hands of the 
enemy. - __Auguste Kerckhoffs, Military Cryptography__

In other words, a good cryptosystem maintains security in the hands of 
others, as long as the key is kept safe.

### Uses of Keys
**_The Caesar Cipher_**

TODO

**_One-Time Pad (OTP)_**

TODO


## Encryption Algorithms

There are three main types of encryption algorithms: one-way algorithms, 
symmetric-key algorithms, and public-key algorithms.

### One-Way Algorithms
TODO

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

