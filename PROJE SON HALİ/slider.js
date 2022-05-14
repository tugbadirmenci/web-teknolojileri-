/* slider javascript kodları */ 
var slayt=document.getElementsByClassName("slayt");
var slaytsayisi=slayt.length;
var slaytno=0;
slaytgoster(slaytno);
function önceki()
{
    slaytno--;
    slaytgoster(slaytno);
    clearInterval(s);
}
function sonraki()
{
    slaytno++;
    slaytgoster(slaytno);
    clearInterval(s);
}
var s = setInterval(function()
{
    slaytno++;
    slaytgoster(slaytno);
},1800);
function slaytgoster(slaytnumarasi)
{
    slaytno=slaytnumarasi;
    if(slaytnumarasi>=slaytsayisi)
    {
        slaytno=0;
    }
    if(slaytnumarasi<0)
    {
        slaytno=slaytsayisi-1;
    }
    for(i=0; i<slaytsayisi; i++)
    {
        slayt[i].style.display="none";
    }
    slayt[slaytno].style.display="block";
}