<?php

require_once "DataBase.php";

class Ceccil {
    
    private $db;

    public function __construct(){
        $this->db = DataBase::getConexao();
    }

    public function getAllCeccil(){

        $consulta = $this->db->query("SELECT * FROM home");

        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }
}