const cat = document.getElementById('cat');
const dog = document.getElementById('dog');
const catbtn = document.getElementById('cat-btn');
const dogbtn = document.getElementById('dog-btn');

catbtn.addEventListener('click',getRandomCat)
dogbtn.addEventListener('click',getRandomDog)

function getRandomCat()
{
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data=>{
        cat.innerHTML=`<img src="${data.file}"/>`
    })
}
function getRandomDog()
{
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data=>{
        if(data.url.includes('.mp4')){
            getRandomDog()
        }
        else {
        dog.innerHTML=`<img src="${data.url}"/>`
        }
    })
}