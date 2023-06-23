#Remote build script for push
cd /home/ubuntu/dots_and_boxes
sudo git pull
sudo fuser -k 7070/tcp
sudo fuser -k 7071/tcp
sudo mvn clean package --file ./server/pom.xml
sudo mvn clean package --file ./resource_server/pom.xml
sudo nohup java -jar ./server/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
sudo nohup java -jar ./resource_server/dots_boxes-1.0-SNAPSHOT-jar-with-dependencies.jar &
sudo rm -rf /var/www/mysite/
sudo echo "SITE REMOVED"
sudo cp -r ./site/ /var/www/mysite/
sudo systemctl reload nginx
sudo echo "NEW SITE LOADED"
