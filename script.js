
/* for navigation bar*/
hamburgur=document.querySelector(".hamburgur");
hamburgur.onclick=function(){
     navbar=document.querySelector(".nav");
    navbar.classList.toggle("active");
}
/*for homepage*/
function changeBg(){
    const image=[
        'url("jordan3.png")',
        'url("nike5.png")',
        'url("puma7.png")',
        'url("jordan6.png")',
        'url("nike3.png")',
        'url("jordan4.png")',
        'url("nike6.png")',
        'url("jordan5.png")',
        'url("puma6.png")',
        'url("puma3.png")',
    ]
    const shoeImage=document.querySelector(".shoe-background")
    const bg=image[Math.floor(Math.random()*image.length)];
    shoeImage.style.backgroundImage=bg;

}
setInterval(changeBg,1000)
/*for productpage*/
function addTOCart(){
    if(document.querySelectorAll('.btns')){
        window.alert("Your Order Is Succesfully Done")
    }
}

/*for overviewpage*/
const nextEl=document.querySelector(".fa-chevron-right");
const prevEl=document.querySelector(".fa-chevron-left");
const videoEl=document.querySelectorAll(".vid")
const videoContainerEl=document.querySelector(".video-container");
let currentVideo=1;
let timeout;
nextEl.addEventListener("click",()=>{
    currentVideo++;
    clearTimeout(timeout);
    updateVideo();
})
prevEl.addEventListener("click",()=>{
    currentVideo--;
    clearTimeout(timeout);
    updateVideo();
})
updateVideo();
function updateVideo(){
    if(currentVideo > videoEl.length){
        currentVideo=1;
    }
     else if(currentVideo < 1){
        currentVideo=videoEl.length;
    }
    videoContainerEl.style.transform=`translateX(-${(currentVideo-1)*485}px)`;
    timeout=setTimeout(()=>{
        currentVideo++;
        updateVideo();
    },11000)
}
