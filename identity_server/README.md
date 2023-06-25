## Identity Server
### Database
Create a sql server database and run the info.sql script to create the necessary tables
### Environment Variables
Set the following environment variables for the server to work
- RSA private key location: privateKey
- RSA public key location: publicKey
- Issuer for jwt token: issuer
- Audience for jwt token: audience
- The username for db access: dbUsername
- The password for db access: dbPassword
- The url for db access: dbUrl
- The schema which you are going to connect: dbName
    - If you run the script as is the dbName = OAuth
### RSAKeys
Run the following commands to generate the RSA keys for the program
- openssl genrsa -out privatekey.pem 2048
- openssl rsa -in privatekey.pem -out publickey.pem -pubout