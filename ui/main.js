//COUNTER CODE
var button= document.getElementByID("counter");
var count=0;
button.onclick = function(){
    counter=counter+1;
    var span= document.getElementByid("counter");
    sapn.innerHTML = counter.toString();
}
