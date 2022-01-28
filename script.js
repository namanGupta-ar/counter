var digit = document.getElementById("digit");
var startButton = document.getElementById("start");




var box1 = document.getElementById('upper-number');

var box2 = document.getElementById('lower-number');

function startCounter()
{   
    var count = 0;
    var interval = setInterval(function()
    {   
        if(count >=digit.value)
        {
            clearInterval(interval);
            return;
        }
        
        count++;
        box2.innerHTML = count;
        animate(count);
    },1000);
}

function animate(count)
{
    box2.classList.add('animate');
    setTimeout(function()
    {   
        box2.classList.remove('animate');
        box1.innerHTML = count;
    },600);
}

startButton.addEventListener('click',function(){
    console.log(digit.value);
    startCounter();
});