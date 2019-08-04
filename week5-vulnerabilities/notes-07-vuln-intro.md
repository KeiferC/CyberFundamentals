# Disclosing Vulnerabilities

### Contents
[The Vulnerability Disclosure Problem](#the-vulnerability-disclosure-problem)

[What Are Vulnerabilities?](#what-are-vulnerabilities)

[Vulnerability Collections](#vulnerability-collections)

*[Back](../week5-vulnerabilities#week-5---vulnerabilities)*


## The Vulnerability Disclosure Problem
In cybersecurity, we find vulnerabilities so that developers can patch
the weaknesses before they get exploited (or exploited more). At the 
end of the day, the goal is to protect the rights of users. However, 
there are those who have different perspectives regarding vulnerabilities, 
including:

- Attackers who wish to exploit the vulnerabilities for personal gain.
- Whistleblowers who wish to exploit the vulnerabilities to disclose
  protected information.
- Law enforcement agencies who wish to exploit the vulnerabilities for 
  investigative purposes.
- Governments who wish to exploit the vulnerabilities for "national 
  security" reasons.
- Companies who keep the vulnerabilities secret for profit reasons (e.g.
  stock prices, customer retainment, cost of patches, exploitation).
- Organizations who wish to exploit the vulnerabilities to further political
  and / or personal interests.
- Apathetic parties who are not well-informed about or who are not concerened
  about cybersecurity.

Therefore, there are several conundrums that a hacker must face when 
attempting to disclose vulnerabilities:

- Will the vulnerability be patched?
- What are the consequences if the vulnerabilities do not get patched?
- What are the consequences of disclosing vulnerabilties to others?
- What to do if the owner of the product containing the vulnerability 
  has no intention of patching the problem?
- What legal issues may arise from disclosing the vulnerability?
- What pushback may occur from the vulnerability disclosure?
- Should the vulnerability be disclosed if it is not likely to be patched?
- What consequences will I face if I disclose this vulnerability?
- and more...

If you are having concerns regarding vulnerability disclosures, you may want 
to check out [HackerOne's Vulnerability Disclosure Guidelines](https://www.hackerone.com/disclosure-guidelines).

### The Vulnerabilities Equities Process (VEP)
The Vulnerabilities Equities Process (VEP) is a process used by the 
United States government in order to decide whether to disclose a zero-day 
vulnerability to the concerned parties or to keep the vulnerability a secret 
to advance government interests. In short, the VEP brings specific government
agencies, known as the Equities Review Board (ERB), together in order to 
balance each agency's interests regarding the found vulnerability.

The ERB consists of:
- The National Security Agency (NSA), who serves as the executive secretariat
- Office of Management and Budget (OMB)
- Office of the Director of National Intelligence (DNI)
- United States Department of the Treasury (DT)
- United States Department of State (DOS)
- United States Department of Justice (DOJ) 
- Department of Homeland Security (DHS) 
- United States Department of Energy (DOE)
- United States Department of Defense (DOD) 
- United States Department of Commerce (DOC) 
- Central Intelligence Agency (CIA)

The ERB meets monthly.


## What Are Vulnerabilities?
__Vulnerability__: "A weakness in the computation logic (e.g. code), found in
software and some hardware components (e.g. firmware) that, when exploited,
results in a negative impact to confidentiality, integrity, OR availability."
- Examples of vulnerabilities:
  - pfh (remote command execution as user "nobody"
  - rpc.ttdbserverd (remote command execution as root)
  - world-writeable password file (modification of system-critical data)
  - default password (remote command execution or other access)
  - denial of service problems that allow an attacker to cause a Blue Screen
    of Death
  - smurf (denial of service by flooding a network)
- Source: [CVE](https://cve.mitre.org/about/terminology.html)

All systems are hackable, whether due to their complexity, due to their 
users, or due to their lifespan. 

## Vulnerability Collections

### Common Vulnerabilities and Exposures (CVE)
__Common Vulnerabilities and Exposures (CVE)__: A dictionary (not a database) 
of common names (i.e. CVE indentifiers) for publicly known cybersecurity 
vulnerabilities.
- Free for public download and use
- CVE ID Syntax: `CVE-<YEAR>-<ARBITRARY_DIGITS> e.g. CVE2014-7654231`
- Does not provide proof of concepts (PoC) or exploits
- Source: [CVE](https://cve.mitre.org)
- CVE describes the specific vulnerabilities existing in a specific instance
  within a product or a system.
  - E.g. CVE-2015-2213: A SQL injection vulnerability in WordPress

### Common Weakness Enumeration (CWE)
__Common Weakness Enumeration (CWE)__: "A formal list of software weakness types 
created to:
- Serve as a common language for describing software security weaknesses in
  architecture, design, or code
- Serve as a standard measuring stick for software security tools targeting
  these weaknesses
- Provide a common baseline standard for weakness identification, mitigation, 
  and prevention efforts"
- Source: [CWE](https://cwe.mitre.org/about/index.html)
- CWE describes the improper practices / implementations or flaws that may 
  lead to a vulnerability.
  - E.g. CWE-89: Improver Sanitization of Special Elements used in a SQL 
    Command (the existence of this weakness in the WordPress code caused
    CVE-2015-2213)

### National Vulnerability Database (NVD)
__National Vulnerability Database (NVD)__: A database containing references to 
advisories, solutions, and tools regarding CVE vulnerabilities. 
- Maintained by the National Institute of Standards and Technology (NIST)
- Source: [NVD](https://nvd.nist.gov/home.cfm)

### Open Sourced Vulnerability Database (OSVDB)
__Open Sourced Vulnerability Database (OSVDB)__: An open-source database 
providing technical information regarding security vulnerabilities.
- Is currently unmaintained and is looking for people to take over
- Source: [OSVDB](http://osvdb.org/)

### The Exploit Database
__The Exploit Database__: "A repository for ecploits and proof-of-concepts 
rather than advisories" regarding CVE vulnerabilities.
- Maintained by Offensive Security
- Can be accessed via `searchsploit`
- Source: [Exploit DB](https://www.exploit-db.com)

