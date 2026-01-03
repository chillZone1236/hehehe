// Floating hearts
const container=document.getElementById("hearts-container");

function createHeart(x,y){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.textContent="❤️";
  const size=Math.random()*18+20;
  heart.style.fontSize=size+"px";
  const posX=x!==undefined?x:Math.random()*(window.innerWidth-size);
  const posY=y!==undefined?y:window.innerHeight+20;
  heart.style.left=posX+"px";
  heart.style.top=posY+"px";
  heart.style.animationDuration=(Math.random()*4+4)+"s";
  heart.addEventListener("click",e=>{
    e.stopPropagation();
    heart.style.animation="pop 0.3s forwards";
    setTimeout(()=>heart.remove(),300);
  });
  container.appendChild(heart);
  setTimeout(()=>{if(heart.parentNode)heart.remove()},9000);
}

setInterval(()=>createHeart(),300);
document.addEventListener("click",e=>{
  for(let i=0;i<3;i++)createHeart(e.clientX,e.clientY);
});

// Gift click to toggle message
const gifts=document.querySelectorAll(".gift-box");
gifts.forEach(gift=>{
  gift.addEventListener("click",()=>{
    const isActive=gift.classList.contains("active");
    gifts.forEach(g=>g.classList.remove("active"));
    if(!isActive) gift.classList.add("active");
  });
});
document.addEventListener("click",e=>{
  if(!e.target.closest(".gift-box")){
    gifts.forEach(g=>g.classList.remove("active"));
  }
});
