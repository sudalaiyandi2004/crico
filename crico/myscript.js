function srtclck(){
    let x=document.getElementById("in").value;
    if(x==""){
        alert("Please enter the name");
    }
    else{
        console.log(x);
        window.location.href="toss.html";
    }
    localStorage.setItem("values",x);
    
}
function toss(a){
    let x=Math.floor(Math.random()*7);
    document.getElementById("stars").disabled=true;
    document.getElementById("dollars").disabled=true;
    if(x>=3){
        document.getElementById("para").innerHTML="you won the toss";
        document.getElementById("bat").style.display="block";
        document.getElementById("bowl").style.display="block";
    }
    else{
        if(x%2==0){
            document.getElementById("para").innerHTML="opponent choose to bowl";
            cric(1);
        }
        else{
            document.getElementById("para").innerHTML="opponent choose to bat";
            cric(0);
        }
    }
    console.log(x);
}
let sum=0;
var sums=0;
let play=1;
let ball=10;
var sums1=0;
let sum1=0;
function cric(s){
    if(s==1){
        window.location.href="bat.html";
    }
    else{
        window.location.href="bowls.html";   
    }
}
function funct(d){
    let rand=Math.floor(Math.random()*6)+1;
    if(ball>0 && play<4 ){
    if(rand==d){
        play+=1;
        sum=0;
        sums+=0;
        
    }
    else{
        sum+=d;
        sums+=d;
    }
    ball--;
    document.getElementById("bt"+play).innerHTML=sum;
    document.getElementById("bts").innerHTML=sums;
    document.getElementById("photo1").src=d+".png";
    document.getElementById("photo2").src=rand+".png";
    document.getElementById("btss").innerHTML=ball;
    console.log(rand,d);
    
    }
    else{
        localStorage.setItem("value",sums);
        window.location.href="bowl.html";
    }

}
function functi(d){
    let rand=Math.floor(Math.random()*6)+1;
    if(ball>0 && play<4){
    if(rand==d){
        play+=1;
        sum=0;
        sums+=0;
        
    }
    else{
        sum+=d;
        sums+=d;
    }
    ball--;
    document.getElementById("bt"+play).innerHTML=sum;
    document.getElementById("bts").innerHTML=sums;
    document.getElementById("photo1").src=d+".png";
    document.getElementById("photo2").src=rand+".png";
    document.getElementById("btss").innerHTML=ball;
    console.log(rand,d);
    
    }
    else{
        localStorage.setItem("value",sums);
        window.location.href="bats.html";
    }

}
function functs(d){
    let rand=Math.floor(Math.random()*6)+1;
    var sums=localStorage.getItem("value");
    
    if(ball>1 && play<4 && sums>sums1){
    if(rand==d){
        play+=1;
        sum1=0;
        sums1+=0;
    }
    else{
        sum1+=d;
        sums1+=d;
    }
    ball--;
    document.getElementById("bt"+play).innerHTML=sum1;
    document.getElementById("btss").innerHTML=sums1;
    document.getElementById("photo1").src=d+".png";
    document.getElementById("photo2").src=rand+".png";
    if(sums>sum1){
    document.getElementById("tos").innerHTML="NEED "+(sums-sums1+1)+" FROM "+ball+" BALL";
    }
    else{
        document.getElementById("tos").style.display=none;
    }
    console.log(rand,d);
    
    }
    else{
        if(sums>sums1){
        window.location.href="win.html";
        }
        else{
            window.location.href="lose.html";
        }
    }
}


function functo(d){
    let rand=Math.floor(Math.random()*6)+1;
    var sums=localStorage.getItem("value");
    if(ball>1 && play<4 && sums>sums1){
    if(rand==d){
        play+=1;
        sum1=0;
        sums1+=0;
    }
    else{
        sum1+=d;
        sums1+=d;
    }
    ball--;
    document.getElementById("bt"+play).innerHTML=sum1;
    document.getElementById("btss").innerHTML=sums1;
    document.getElementById("photo1").src=d+".png";
    document.getElementById("photo2").src=rand+".png";
    if(sums>sum1){
    document.getElementById("tos").innerHTML="NEED "+(sums-sums1+1)+" FROM "+ball+" BALL";
    }
    else{
        document.getElementById("tos").style.display=none;
    }
    console.log(rand,d);
    
    }
    else{
        if(sums<sums1){
        window.location.href="win.html";
        }
        else{
            window.location.href="lose.html";
        }
    }
}
