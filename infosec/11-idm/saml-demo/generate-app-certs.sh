#!/bin/sh

openssl req -x509 -newkey rsa:4096 -keyout certs/key.pem \
-out certs/cert.pem -nodes -days 900

open http://localhost:8080/simplesaml/saml2/idp/metadata.php

echo "Copy the string defined with tag `X509Certificate`"
echo "Paste the string into certs/idp_key.pem"
