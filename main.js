window.addEventListener('wheel',function(event){
   if(event.deltaY < 0){
    console.log("scrolling up..")
   }else if(event.deltaY > 0){
    console.log("scrolling down..")
   }
});

function fun(){
    alert("Wanna go Microsoft Store")
}
window.addEventListener('keydown', checkkey);
function checkkey(event){
    console.log(event.key);
}