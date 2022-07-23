document.querySelector("#top>div:nth-child(4)>div:nth-child(1)").addEventListener("click",count)


function count(event){
    event.preventDefault();
    location.href="sl.html"
}
document.querySelector("#top>div:nth-child(4)>div:nth-child(2)").addEventListener("click",counts)


function counts(event){
    event.preventDefault();
    location.href="sa.html"
}
document.querySelector("#top>div:nth-child(4)>div:nth-child(3)").addEventListener("click",countee)


function countee(event){
    event.preventDefault();
    location.href="ind.html"
}
document.querySelector("#top>div:nth-child(4)>div:nth-child(4)").addEventListener("click",counted)


function counted(event){
    event.preventDefault();
    location.href="eng.html"
}
document.querySelector("#navbar>div:nth-child(1)>img").addEventListener("click",reload);

function reload(event){
    event.preventDefault();
    console.log("hi")
    location.href="top-homepage.html"
}