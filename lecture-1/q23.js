let distance=100
let time =2

let speed=distance/time

if(speed>40){
   document.getElementById('text').innerHTML=`Apply Brake`
}
else{
   document.getElementById('text').innerHTML=`Keep going`
}