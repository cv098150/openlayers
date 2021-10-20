# openlayers - test

* 請先修改docker-compose.yml mysql密碼
* 在專案底下執行 `docker-compose up -d`
* 再執行 `docker inspect openlayers_mysql_1|grep IPAddress` 取得`mysql ip`
* 修改 `public/api/index.php` 設定裡的 `$dbHost` 資訊
* 匯入 `sql/openlayers.sql` 資訊
* 瀏覽器輸入 `127.0.0.1:8082` 即可看到網站


