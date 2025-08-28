// writting programming on heart icon
function increaseHeart(id){
    const heart = document.getElementById(id);
    const heartInnerText = parseInt(heart.innerText);     
    total = heartInnerText + 1;
    const finalValue = heart.innerText = total;
}
    
document.getElementById("national-help").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("police").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("fire").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("ambulance").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("w&c-helpline").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("anti-c-helpline").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("electricity").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("brac").addEventListener("click", function(e){
    increaseHeart("hearts")
});
document.getElementById("railway").addEventListener("click", function(e){
    increaseHeart("hearts")
});

