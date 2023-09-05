 const Button=document.querySelector("input[type=button]");
 let res=document.querySelector(".res").children;
 Button.addEventListener('click',function(){
    const degre=document.querySelector("input[type=text]").value;
    const temp=document.querySelector("#select").value;
    if(degre==='')
    {
        alert("degre field must be field")
    }
    else if(temp==='Fahrenheit')
    {
        res[1].innerHTML=( Number(degre)*(9/5)) + 32 +" °F";
    }
    else
    {
        res[1].innerHTML=(( Number(degre))-32) *5/9 +" °C";
    }
    
 })
