var myText = document.getElementById("message");

var TextCount = document.getElementById("text-count");

var limit = myText.getAttribute("maxlength");

TextCount.textContent = 0 + "/" + limit;

myText.addEventListener('input',()=>{
    var textLength = myText.value.length;
    TextCount.textContent = textLength + "/" + limit;
});