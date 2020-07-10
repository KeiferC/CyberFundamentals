#!/bin/sh

docker pull kristophjunge/test-saml-idp

docker run --name=testsamlidp -p 8080:8080 -p 8443:8443 \
-e SIMPLESAMLPHP_SP_ENTITY_ID=saml-poc \
-e SIMPLESAMLPHP_SP_ASSERTION_CONSUMER_SERVICE=http://localhost:4300/login/callback \
-d kristophjunge/test-saml-idp

docker ps
echo

open http://localhost:8080/simplesaml

echo "IdP testing instructions:"
echo "Select Authentication/Test configured authentication sources"
echo "Select example-userpass"
echo "Default user-pass:"
echo "UID | Username | Password  | Group  | Email"
echo "=================================================================="
echo "1   | user1    | user1pass | group1 | user1@example.com"
echo "2   | user2    | user2pass | group2 | user2@example.com"
