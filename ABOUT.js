/* for aboutpage*/
function changePumaBg(){
    const puma=[
        'url("puma2.png")',
        'url("puma3.png")',
        'url("puma4.png")',
        'url("puma5.png")',
        'url("puma2.png")',
        'url("PUMA1.png")'
    ]
    const container1=document.querySelector(".container1")
    const pumaBg=puma[Math.floor(Math.random()*puma.length)];
    container1.style.backgroundImage=pumaBg;

}
setInterval(changePumaBg,1000)


function changeNikeBg(){
    const nike=[
        'url("nike2.png")',
        'url("NIKE1.png")',
        'url("nike4.png")',
        'url("NIKE1.png")',
        'url("nike4.png")',
        'url("NIKE.png")'
    ]
    const container2=document.querySelector(".container2")
    const nikeBg=nike[Math.floor(Math.random()*nike.length)];
    container2.style.backgroundImage=nikeBg;

}
setInterval(changeNikeBg,1000)

function changeJordanBg(){
    const jordan=[
        'url("jordan2.png")',
        'url("JORDAN1.png")',
        'url("jordan2.png")',
        'url("JORDAN.png")',
        'url("JORDAN1.png")',
        'url("JORDAN2.png")'
    ]
    const container3=document.querySelector(".container3")
    const jordanBg=jordan[Math.floor(Math.random()*jordan.length)];
    container3.style.backgroundImage=jordanBg;

}
setInterval(changeJordanBg,1000)
