## Resource Server

Run `create_tables_scripts.sql` to create the database tables. 

Before running the `App.java`, set the following environmental variables: 
- `DB_NAME` = "DotsAndBoxes" 
- `DB_USER` = ""
- `DB_PASS` = "" 
- `privateKey` = "" 
- `publicKey` = ""

In the `App.java`, comment out the below code of codes and any other lines which use sslPlugin. 
```
SSLPlugin sslPlugin = new SSLPlugin(conf -> {
  conf.pemFromPath(
  System.getenv("CERT_PATH"),
  System.getenv("CERT_PATH_KEY"),
  System.getenv("CERT_PASS"));
});
```

Update the static files to where your site folder is on your local machine. 
```
config.staticFiles.add("/home/ubuntu/dots_and_boxes/site", Location.EXTERNAL);
```

