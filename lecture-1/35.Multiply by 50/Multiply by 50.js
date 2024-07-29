const multiply=()=> {
    let num1=document.getElementById('num1').value;
  
    let multiply = Number(num1)*50;
    document.getElementById('result').innerHTML=`multiply of ${num1}*50= ${multiply}`;
}
