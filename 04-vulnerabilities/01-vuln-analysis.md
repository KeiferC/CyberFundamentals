# Analyzing Vulnerabilities

### Contents
[Static Analysis](#static-analysis)

[Dynamic Analysis](#dynamic-analysis)

[Tools](#tools)

*[Back](../04-vulnerabilities#vulnerabilities)*


## Static Analysis
AKA static code analysis, AKA source code analysis, static analysis refers to 
the analysis of software done without executing the program. Typically, 
static analysis is done using automated tools, such as grep, lint, Coverity, 
Fortify, and Veracode. Such tools contain rules and analyze the source code 
to determine if they comply with said rules. Static analysis is used to catch 
bugs (e.g. insecure / unsafe functions.

### Techniques
1. __Data Flow Analysis__: Collects runtime info about data while in a 
static state. Is concerned with basic code blocks, control flow, and control 
paths.

2. __Control Graph__: Creates a graph in which each code block is a node 
and each jump / path is an edge.

3. __Taint Analysis (AKA Deterministic Automaton)__: Identifies variables that
have been tainted and identifies used vulnerable functions (AKA sinks).

4. __Lexical Analysis__: Analyzes the sequence of characters in the code and 
generates a sequence of tokens representing each unit of information in the code.
Can catch errors through detecting invalid tokens.

### Pros and Cons
*Pros*
- Finds vulnerabilities with high confidence

*Cons*
- Can generate many false positives or false negatives
- Can't find configuration issues
- Difficult to prove if findings are actual vulnerabilities

## Dynamic Analysis
Dynamic analysis analyzes software by executing the software itself. To be 
effective, the target program must be tested with a large enough and diverse
enough set of inputs. I.e. dynamic analysis detects program dependencies 
and vulnerabilities by trial and error with sets of real runtime variables.
There is no guarantee that dynamic analysis with fully cover the source code.
- Example dynamic analysis tool: `valgrind`

## Tools

### `nikto`
`nikto` is an open-source web server scanner designed to find vulnerabilities
on any type of web server.

```bash
foo@bar:~$ nikto --host <IP_ADDRESS> # example usage
```

Documentation: [cirt.net](https://cirt.net/nikto2-docs)

Source code: [github.com](https://github.com/sullo/nikto)

### Nessus
A commercial vulnerability scanner. Contains a free version, called [Nessus 
Home](https://www.tenable.com/products/nessus-home).

### Open Vulnerability Assessment System (OpenVAS)
A FOSS fork of Nessus.

### Metasploit Project
AKA MSF, the metasploit project (and the metasploit framework), is an 
open-source platform for developing, testing, and using exploit code. 
Currently has over 1600 exploits and 400 payloads.

Source: [metasploit.com](https://www.metasploit.com/)

Source Code: [github.com](https://github.com/rapid7/metasploit-framework)

### JSLint
A static analysis tool used for finding bugs in JavaScript code.

