function craetheart(){
    const heart =document.createElement('div')
heart.classList.add('heart')

    heart.innerText='💜'
heart.style.left=Math.random()*100+'vw';

heart.style.animationDuration=Math.random()* 2 + 10 +"5";
    document.body.appendChild(heart);

    setTimeout(()  =>{
heart.remove()
    },5000);
   
}

setInterval(craetheart,300)