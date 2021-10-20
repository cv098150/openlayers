# openlayers - test

請先修改docker-compose.yml mysql密碼
<br>
在專案底下執行 `docker-compose up -d`
<br>
再執行 `docker inspect openlayers_mysql_1|grep IPAddress` 取得`mysql ip`
<br>
修改 `openlayers/public/api/index.php` 設定裡的 `$dbHost` 資訊
<br>
匯入 `sql/openlayers.sql` 資訊
<br>
瀏覽器輸入 `127.0.0.1:8082` 即可看到網站


