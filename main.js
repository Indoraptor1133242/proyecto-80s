var todo=[];

function agrega(){
    
    document.getElementById("agregador").style.display="inline-block";
    document.getElementById("ki").style.display="none";
    document.getElementById("alfa").style.display="none";
document.getElementById("yacon").style.display="none";
document.getElementById("lista").style.display="inline-block";
document.getElementById("times").style.display="none";
}


    
    



function Mostrar(){

    var parte_de_lista=document.getElementById("objetos").value;
todo.push(parte_de_lista);
var termino=todo.join(" ");
document.getElementById("lista").innerHTML=termino;
document.getElementById("alfa").style.display="none";
document.getElementById("yacon").style.display="none";
document.getElementById("lista").style.display="inline-block";
document.getElementById("times").style.display="none";


}
function reversar(){
    
var creo=todo.reverse();
var salto=creo.join(" ")
document.getElementById("yacon").innerHTML=salto;
document.getElementById("agregador").style.display="none";
document.getElementById("lista").style.display="none";
document.getElementById("alfa").style.display="none";
document.getElementById("yacon").style.display="inline-block";
document.getElementById("times").style.display="none";
    

}
function ordenar(){
    var ord=todo.sort();
    var ya=ord.join(" ");
    document.getElementById("agregador").style.display="none";
    document.getElementById("alfa").innerHTML=ya;
    document.getElementById("lista").style.display="none";
    document.getElementById("yacon").style.display="none";
    document.getElementById("alfa").style.display="inline-block";
    document.getElementById("times").style.display="none";

    
}

function bus(){
    var orl=todo.join(" ");
var s= document.getElementById("buscar").value;

var found= 0;
   var j;
   for(j=0; j<todo.length;j++){
       if(s==todo[j]){
       found=found+1;}

   }
   document.getElementById("agregador").style.display="none";
   document.getElementById("times").innerHTML="Name found "+ found +" time/s";
   document.getElementById("lista").style.display="none";
    document.getElementById("yacon").style.display="none";
    document.getElementById("alfa").style.display="none";
    document.getElementById("times").style.display="inline-block";

}

    
