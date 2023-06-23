#Remote build script for push
cd /home/ubuntu/dots_and_boxes
git pull
fuser -k 7070/tcp
fuser -k 7071/tcp
mvn clean package --file ./server/pom.xml
mvn clean package --file ./resource_server/pom.xml
nohup java -jar ./server/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
nohup java -jar ./resource_server/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
rm -rf /var/www/mysite/
echo "SITE REMOVED"
cp -r ./site/ /var/www/mysite/
systemctl reload nginx
echo "NEW SITE LOADED"
