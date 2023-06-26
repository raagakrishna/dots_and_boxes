#Remote build script for push
git pull
lsof -t -i tcp:7071 -s tcp:listen | sudo xargs kill
mvn clean package --file ./server/pom.xml
mvn clean package --file ./identity_server/pom.xml
env audience="" \
dbName="" \
dbPassword="" \
dbUrl="" \
dbUsername="" \
issuer="" \
privateKey="" \
publicKey="" \
java -jar ./identity_server/target/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar
