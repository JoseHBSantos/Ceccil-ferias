<?php

require_once "models/CeccilModel.php";

class CeccilController {

    private $url = "http://localhost/uc5/ceccil";

    private $ceccilModel;

    public function __construct(){
        $this->ceccilModel = new Ceccil();
    }

    public function index(){
        $home = $this->ceccilModel->getAllHome();

        $baseUrl = $this->url;

        //echo json_encode
    }
}