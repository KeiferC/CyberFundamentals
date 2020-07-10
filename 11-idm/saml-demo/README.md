# SAML 2.0 SSO Demo

Based on [Jeffry Houser's work](https://medium.com/disney-streaming/setup-a-single-sign-on-saml-test-environment-with-docker-and-nodejs-c53fc1a984c9)
and on the [passport-saml github examples](https://github.com/bergie/passport-saml).

*Note:* Certs are make public in the `certs/` directory for transparency in the
demo process. Certs are unique to this SP demo implementation. Security people
may find `certs/cert.pem` interesting.

- `certs/cert.pem`: Public SP key
- `certs/key.pem`: Private SP key
- `certs/idp_key.pem`: Public IdP key

### Requirements

- `node.js`
- `npm`
- `docker`

### Installation
```sh
$ git init
$ git remote add origin https://github.com/KeiferC/InfosecFundamentals.git
$ git fetch origin
$ git checkout origin/master -- 11-idm/saml-demo
$ cd 11-dim/saml-demo
$ npm install
$ # if the scripts are executable, run `chmod u+x [SCRIPT_FILE]`
$ ./docker-idp.sh # sets up docker container for IdP
$       # follow the instructions prompted on the terminal to see how to
$       # to use the IdP app
$ # if the certs have expired (900 day lifespan), run `./generate-app-certs.sh`
```

- Open http://localhost:8080/simplesaml/module.php/core/frontpage_welcome.php to
  play around with the IdP

### Usage
```sh
$ node index.js # spins up the SP server
```

- Open http://localhost:4300 to test if server is on
- Open http://localhost:4300/login to use SSO
- Open http://localhost:4300/metadata to see what data an IdP can read
  from the SP

### Cleanup
```sh
$ docker stop testsamlidp # stops docker container
$ docker rm testsamlidp # removes docker container
```

