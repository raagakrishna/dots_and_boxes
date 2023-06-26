#Remote build script for push
git pull
lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill
lsof -t -i tcp:443 -s tcp:listen | sudo xargs kill
mvn clean package --file ./server/pom.xml
mvn clean package --file ./identity_server/pom.xml
env DB_HOST="" \
DB_NAME="" \
DB_USER="" \
DB_PASS="" \
CERT_PATH="" \
CERT_PATH_KEY="" \
CERT_PASS="" \
java -jar ./server/target/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar
