var button=document.getElementById("counter");
var counter=0;
button.onClick=function(){
    //make request to the counder end point
    
    
    //cspture the response and store in avariable
    
    //render the variable in a correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};