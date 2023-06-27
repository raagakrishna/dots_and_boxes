## Resource Server

Run `create_tables_scripts.sql` to create the database tables. 

Before running the `App.java`, set the following environmental variables: 
- `DB_NAME` = "DotsAndBoxes" 
- `DB_USER` = "root"
- `DB_PASS` = "RootPasswordForIDDB" 
- `CERT_PATH` = "/etc/letsencrypt/live/georgepauer.com/fullchain.pem" 
- `CERT_PATH_KEY` = "/etc/letsencrypt/live/georgepauer.com/privkey.pem" 
- `CERT_PASS` = "Password@2023" 
- `privateKey` = "/home/ubuntu/dots_and_boxes/pkcs8.key" 
- `publicKey` = "/home/ubuntu/dots_and_boxes/publickey.crt" 
