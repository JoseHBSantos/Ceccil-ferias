<?php

# Estabelecer a conexão com o banco de dados

class DataBase{
    # atributo privado e estatico
    private static $conexao = null;

    # método publico e estatico
    public static function getConexao(){

        # Testa se a conexão já existe para evitar uma nova conexão
        if(self::$conexao == null){
            $host = "localhost";
            $nomeDoBanco = "ceccil";
            $usuario = "root";
            $senha = "" ;

            try{

                self::$conexao = new PDO(
                    "mysql:host=$host;dbname=$nomeDoBanco",
                    $usuario,
                    $senha
                );
                self::$conexao->setAttribute(
                    PDO::ATTR_ERRMODE,
                    PDO::ERRMODE_EXCEPTION
                );

            }catch (PDOException $erro) {
                echo "Erro de conexão" . $erro->getMessage();
            }
        }
        return self::$conexao;
    }

}