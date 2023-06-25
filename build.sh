#Remote build script for push
git pull
fuser -k 80/tcp
fuser -k 443/tcp
fuser -k 7071/tcp
mvn clean package --file ./server/pom.xml
mvn clean package --file ./identity_server/pom.xml
nohup java -jar ./server/target/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
nohup java -jar ./identity_server/target/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
