-- Criar o banco de dados
CREATE DATABASE ceccil;

-- Usar o banco de dados recém-criado
USE ceccil;

-- Criar as tabelas principais dentro de CECCIL 
CREATE TABLE fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(100),
    nome_fantasia VARCHAR(100),
    cnpj VARCHAR (20),
    inscricao_estadual varchar(20),
    endereco VARCHAR NOT NULL(100),
    numero_end INT NOT NULL,
    bairro VARCHAR(100),
    complemento varchar(100)
    cep VARCHAR(20) NOT NULL,
    telefone_1 VARCHAR(50),
    telefone_2 VARCHAR(50),
    celular VARCHAR(50),
    email VARCHAR(100),
    email_financeiro VARCHAR(100),
    cidade VARCHAR(100),
    uf VARCHAR(2),
    pais VARCHAR (50),
);

CREATE TABLE usuario(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE NOT NULL,
    sexo VARCHAR (20),
    cpf VARCHAR (20),
    rg VARCHAR (20),
    endereco VARCHAR NOT NULL(100),
    numero_end INT NOT NULL,
    bairro VARCHAR(100),
    complemento varchar(100)
    cep VARCHAR(20) NOT NULL,
    telefone VARCHAR(50),
    celular VARCHAR(50),
    email VARCHAR(100),
    cidade VARCHAR(100),
    uf VARCHAR(2),
    pais VARCHAR (50),
);

CREATE TABLE pedidos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    idProduto FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idProduto`);
    pagamento VARCHAR (20),
);