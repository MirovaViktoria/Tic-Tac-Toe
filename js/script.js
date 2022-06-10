window.onload = function(){
for(var i=0;i<9;i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}
var hod = 0;
document.getElementById('game').onclick=function(event){
   if(event.target.className == 'block') {
       if(hod % 2==0){
        event.target.innerHTML ='x';    
       } 
       else{
         event.target.innerHTML ='o';   
       } 
       hod++;
       checkWinner();
   }
   function checkWinner(){
       var allblock = document.getElementsByClassName('block');
       if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex";
       }
        if(allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex"; 
       }
        if(allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex";
       }
        if(allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex"; 
       }
        if(allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex"; 
       }
        if(allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex";  
       }
        if(allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x'){
        document.getElementById("Win").style.display = "flex"; 
       }
       
    //    НОЛИКИ
           if(allblock[0].innerHTML=='o' && allblock[1].innerHTML=='o' && allblock[2].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex"; 
       }
        if(allblock[3].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[5].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex";
       }
        if(allblock[6].innerHTML=='o' && allblock[7].innerHTML=='o' && allblock[8].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex";
       }
        if(allblock[0].innerHTML=='o' && allblock[3].innerHTML=='o' && allblock[6].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex"; 
       }
        if(allblock[1].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[7].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex";  
       }
        if(allblock[2].innerHTML=='o' && allblock[5].innerHTML=='o' && allblock[8].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex";  
       }
        if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='o' && allblock[8].innerHTML=='o'){
        document.getElementById("Win_circle").style.display = "flex"; 
       }    
   }
}
}
