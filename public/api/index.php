<?php
class IndexAction
{
    /**
     * 地圖資訊
     */
    protected $mapData;
    protected $dbHost = '127.0.0.1';
    protected $dbName = 'openlayers';
    protected $dbPort = '3306';
    protected $dbUser = 'root';
    protected $dbPwd = '1234';
    protected $db;

    public function __construct()
    {
        $this->db = $this->getDb();
        $this->mapData = json_decode(file_get_contents('php://input'), true);

        if (empty($this->mapData)) {
            // 取值
            $this->getMapData();
        } else {
            // 儲存
            $this->setMapData();
        }
    }


    /**
     * 儲存
     */
    public function setMapData()
    {
        try {

            $sql = "INSERT INTO map (data, add_time) VALUES ('" . $this->mapData . "', '" . time() . "')";
            $this->db->exec($sql);
            $json = json_encode(['error' => 0, 'msg' => 'save success']);
        } catch (Exception $e) {
            $json = json_encode(['erroe' => 1, 'msg' => $e->getMessage()]);
        }
        die($json);
    }

    /**
     * 
     */
    public function getMapData()
    {
        $stmt = $this->db->prepare("SELECT data FROM map ORDER BY id DESC LIMIT 1");
        $stmt->execute();
        $result = $stmt->fetch();
        $json = $result['data'];
        die($json);
    }

    /**
     * 建立連線資訊
     */
    private function getDb()
    {
        try {
            $db = new PDO("mysql:host=$this->dbHost;port=$this->dbPort;dbname=$this->dbName", $this->dbUser, $this->dbPwd);

            return $db;
        } catch (Exception $e) {
            die("Connection failed:: " . $e->getMessage() . "<br/>");
        }
    }
}

new IndexAction();
