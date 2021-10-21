# openlayers - test

* 請先修改 `docker-compose.yml` `MYSQL_ROOT_PASSWORD` (mysql密碼)
* 再修改 `public/api/index.php` 設定裡的連線資訊
* 在專案底下執行 `docker-compose build`
* 再執行 `docker-compose up -d`
* 匯入 `sql/openlayers.sql` 資訊
* 瀏覽器輸入 `127.0.0.1:8082` 即可看到網站


