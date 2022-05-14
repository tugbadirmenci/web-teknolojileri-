<?php
include("kullanici.php");
if(($_POST["username"]==$user) and ($_POST["password"]==$pass)){
$_SESSION["login"] = "true";
$_SESSION["user"] = $user;
$_SESSION["pass"] = $pass;
$mesaj       ="<script>alert('Hosgeldin $user')</script>";
echo $mesaj;
header("Refresh:0; url=index.html");
}else{
$mesaj       ="<script>alert('Kullancı Adı veya Şifre Yanlış.Giriş sayfasına yönlendiriliyorsunuz.')</script>";
echo $mesaj;
header("Refresh: 0; url=giris.html");
}
?>
