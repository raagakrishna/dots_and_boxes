## Identity Server

### Database
Create a sql server database and run the `info.sql` script to create the necessary tables

### Environment Variables
Set the following environment variables for the server to work
- `audience` = "https://georgepauer.com" 
- `dbName` = "OAuth" 
- `dbPassword` = "ThisPasswordIsForTheOAuthUser12!" 
- `dbUrl` = "mssqldb.cazaz9ris2iv.af-south-1.rds.amazonaws.com" 
- `dbUsername` = "IdentityUser" 
- `issuer` = "https://georgepauer.com" 
- `privateKey` = "/home/ubuntu/dots_and_boxes/pkcs8.key" 
- `publicKey` = "/home/ubuntu/dots_and_boxes/publickey.crt" 

### RSAKeys
Run the following commands to generate the RSA keys for the program
- Linux based systems
  - openssl genrsa -out privatekey.pem 2048
  - openssl rsa -in privatekey.pem -out publickey.pem -pubout
- Windows systems
  - openssl genrsa -out keypair.pem 2048
  - openssl rsa -in keypair.pem -pubout -out publickey.crt
  - openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out pkcs8.key
