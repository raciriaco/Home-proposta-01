<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "db_tcc_estacionamento";


$cpf = $_POST["cpf"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$placa = $_POST["placa"];
$mensagemError = "Alerta: algo deu errado!";
$mensagem = "Cadastrado com sucesso!";

// Conexão com a primeira tabela
$conn1 = new mysqli($servername, $username, $password, $dbname);
if ($conn1->connect_error) {
    die("Falha na conexão para inserir o email e senha: " . $conn1->connect_error);
}

// Consulta SQL para a primeira tabela
$sql1 = 'INSERT INTO tb_cliente (cd_email_cliente, cd_senha_cliente ) VALUES ('. "'".$email. "'"  .',' . "'".$senha."'".')';


if ($conn1->query($sql1) === TRUE && $senha != '' || $email != '') {
    echo "<script>alert('$mensagem');window.location.href = 'index.html';</script>";
} else {
     echo "<script>alert('$mensagemError'); window.location.href = 'index.html';</script>" . $conn1->error;
}

// Fechar a conexão com a primeira tabela
$conn1->close();

// Conexão com a segunda tabela
$conn2 = new mysqli($servername, $username, $password, $dbname);
if ($conn2->connect_error) {
    die("Falha na conexão para inserir CPF: " . $conn2->connect_error);
}

// Consulta SQL para a segunda tabela
$sql2 = 'INSERT INTO tb_pessoa_fisica (cd_cpf) VALUES ('. "'".$cpf. "'"  .')';

if ($conn2->query($sql2) === TRUE && $cpf != '') {
     echo "<script>alert('$mensagem');window.location.href = 'index.html';</script>";
} else {
    echo "<script>alert('$mensagemError'); window.location.href = 'index.html';</script>" . $conn2->error;
}

// Fechar a conexão com a segunda tabela
$conn2->close();


// Conexão com a terceira tabela
$conn3 = new mysqli($servername, $username, $password, $dbname);
if ($conn3->connect_error) {
    die("Falha na conexão para inserir a placa: " . $conn3->connect_error);
}

// Consulta SQL para a terceira tabela
$sql3 = 'INSERT INTO tb_veiculo (cd_placa) VALUES ('. "'".$placa. "'"  .')';

if ($conn3->query($sql3) === TRUE && $placa != '') {
    echo "<script>alert('$mensagem');window.location.href = 'index.html';</script>";
} else {
    echo "<script>alert('$mensagemError'); window.location.href = 'index.html';</script>" . $conn3->error;
}

// Fechar a conexão com a terceira tabela
$conn3->close();
?>

