var adsoyad = document.getElementById("adsoyad");
var konu=document.getElementById("konu");
var eposta=document.getElementById("eposta");
var mesaj= document.getElementById("mesaj");
var submit=document.getElementById("submit");
var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
submit.onclick = function formkontrol()
{
    if(adsoyad.value=="" )
    {
        alert("Lütfen ad ve soyad alanını boş bırakmayınız");
        return false;
    }
    else if(konu.value=="")
    {
        alert("Lütfen konu alanını boş bırakmayınız");
        return false;
    }
    else if(eposta.value=="")
    {
        alert("Lütfen e-mail alanını boş bırakmayınız");
        return false;
    }
    else if(regex.test(eposta.value)==false)
    {
        alert("Lütfen e-mailinizi dogru bir şekilde giriniz");
        return false;
    }
    else if(mesaj.value=="")
    {
        alert("Lütfen mesaj alanını boş bırakmayınız");
        return false;
    }
    return true;
}