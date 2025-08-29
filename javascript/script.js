// writting programming on heart icon
function increaseHeartCopy(id){
    const heart = document.getElementById(id);
    const heartInnerText = parseInt(heart.innerText);     
    total = heartInnerText + 1;
    heart.innerText = total;
}
    
document.getElementById("national-help").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("police").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("fire").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("ambulance").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("w&c-helpline").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("anti-c-helpline").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("electricity").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("brac").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});
document.getElementById("railway").addEventListener("click", function(e){
    increaseHeartCopy("hearts")
});

// writting programming for call buttons
function creatingHistoryElement(names, numbers) {
    // Time
    const clockTime = new Date();
    let hour = clockTime.getHours();
    // if(hour === 13){
    //     hour = "01";
    // }else if(hour === 14) {
    //     hour = "02";
    // }else if(hour === 15) {
    //     hour = "03";
    // }else if(hour === 16) {
    //     hour = "04";
    // }else if(hour === 17) {
    //     hour = "05";
    // }else if(hour === 18) {
    //     hour = "06";
    // }else if(hour === 19) {
    //     hour = "07";
    // }else if(hour === 20) {
    //     hour = "08";
    // }else if(hour === 21) {
    //     hour = "09";
    // }else if(hour === 22) {
    //     hour = "10";
    // }else if(hour === 23) {
    //     hour = "11";
    // }else if(hour == "00") {
    //     hour = "12";
    // }
    
    const minute = clockTime.getMinutes();
    let second = clockTime.getSeconds();
    if(second < 10){
        second = "0" + second;
    }
    const times = hour + ":" + minute + ":" + second;

    const history = document.getElementById("history-box");
    const getServiceName = document.getElementById(names).innerText;
    const getServiceNumber = document.getElementById(numbers).innerText;
    const mainParent = document.createElement("div");
    mainParent.classList.add("bg-[#E8E8E8]", "my-2", "flex", "justify-between", "items-center", "p-4", "rounded-lg", "delete-history");
    mainParent.innerHTML = `<div class="info">
                            <h3 class="text-xs font-semibold">${getServiceName}</h3>
                            <p class="text-[10px] text-[#5C5C5C]">${getServiceNumber}</p>
                        </div>
                        <p class="text-xs font-semibold">${times}</p>`;
    history.appendChild(mainParent);
}


function callingBtn(names, numbers) {
    const getServiceName = document.getElementById(names).innerText;
    const getServiceNumber = document.getElementById(numbers).innerText;
    const coins = document.getElementById("coins");
    const coinsValue = coins.innerText;
    let convertedCoins = parseInt(coinsValue);
    if(convertedCoins >= 20){
        alert("📞Calling " + getServiceName + " " + getServiceNumber + "...");
        convertedCoins = convertedCoins - 20;
        coins.innerText = convertedCoins;
        coins.innerText = convertedCoins;
        creatingHistoryElement(names, numbers);
    }else {
        alert("❌আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০টি কয়েন লাগবে।");
    }
};


document.getElementById("calling-emergency").addEventListener("click", function(){
    callingBtn("national-name", "national-number");
    
});
document.getElementById("calling-police").addEventListener("click", function(){
    callingBtn("police-name", "police-number");
});
document.getElementById("calling-fire").addEventListener("click", function(){
    callingBtn("fire-name", "fire-number");
});
document.getElementById("calling-ambulance").addEventListener("click", function(){
    callingBtn("ambulance-name", "ambulance-number");
});
document.getElementById("calling-helpline1").addEventListener("click", function(){
    callingBtn("helpline1-name", "helpline1-number");
});
document.getElementById("calling-helpline2").addEventListener("click", function(){
    callingBtn("helpline2-name", "helpline2-number");
});
document.getElementById("calling-electricity").addEventListener("click", function(){
    callingBtn("electricity-name", "electricity-number");
});
document.getElementById("calling-brac").addEventListener("click", function(){
    callingBtn("brac-name", "brac-number");
});
document.getElementById("calling-railway").addEventListener("click", function(){
    callingBtn("railway-name", "railway-number");
});

// writing programming for history CLEAR button
document.getElementById("clear-btn").addEventListener("click", function() {
    const getHistory = document.getElementById("history-box");
    getHistory.replaceChildren();
})

// writing programming for copy button
function copyNumber(number) {
    const num = document.getElementById(number).textContent;
    navigator.clipboard.writeText(num);
    alert("নম্বর কপি হয়েছে " + num)
}

document.getElementById("copy-btn1").addEventListener("click", function() {
    copyNumber("national-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn2").addEventListener("click", function() {
    copyNumber("police-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn3").addEventListener("click", function() {
    copyNumber("fire-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn4").addEventListener("click", function() {
    copyNumber("ambulance-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn5").addEventListener("click", function() {
    copyNumber("helpline1-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn6").addEventListener("click", function() {
    copyNumber("helpline2-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn7").addEventListener("click", function() {
    copyNumber("electricity-number");
    increaseHeartCopy("copy");
});
document.getElementById("copy-btn8").addEventListener("click", function() {
    copyNumber("brac-number");
    increaseHeartCopy("copy")
});
document.getElementById("copy-btn9").addEventListener("click", function() {
    copyNumber("railway-number");
    increaseHeartCopy("copy");
});