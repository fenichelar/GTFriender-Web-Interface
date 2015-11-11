

ember build --environment production
openssl aes-256-cbc -K $encrypted_faf5e7d2acb0_key -iv $encrypted_faf5e7d2acb0_iv -in travis_rsa.enc -out travis_rsa -d
chmod 600 travis_rsa
mv travis_rsa ~/.ssh/id_rsa
scp -P $SCP_PORT -o stricthostkeychecking=no -r ./dist/. $SCP_USER@$SCP_IP:/var/www/gtfriender.com/.
