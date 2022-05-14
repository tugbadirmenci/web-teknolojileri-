<?php
if(isset($_POST['cinsiyet']))
{
    $cinsiyet=$_POST["cinsiyet"];
}
$adsoyad     = $_POST["adsoyad"];
$konu         = $_POST["konu"];
$eposta         = $_POST["eposta"];
$mesaj        = $_POST["mesaj"];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/src" href="style.css">
    <title>Document</title>
</head>
<body>
    <div>
        <div>
        <fieldset>
         <legend>İletişim Formu Mesajı</legend>
            <p>
            <h3>
            Ad Soyad: <?=$adsoyad?> <br>
            Konu: <?=$konu?> <br>
            E-Posta: <?=$eposta?> <br>
            Cinsiyet: <?=$cinsiyet?> <br>
            Mesaj: <?=$mesaj?> <br>
            </h3>
            </p>
        </fieldset>
            <h4>Mesajınız bize ulasti, en kisa surede cevaplanacaktir. Ilginiz icin tesekkur ederiz.<br><a href=index.html>Anasayfa</a></h4>
        </div>
    </div>
</body>
</html>