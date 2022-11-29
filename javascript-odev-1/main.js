let isim = prompt("Lütfen adınızı giriniz.")
document.getElementById("myName").innerHTML = isim;

const clock = new Date();
document.getElementById("myClock").innerHTML = clock.toDateString("tr-TR")