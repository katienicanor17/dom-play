//alert('test');

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 


const spans = document.querySelectorAll('div#play span');
console.log(spans);

for(const mySpan of spans){
  mySpan.addEventListener('click',function(ev){
    //alert(mySpan.dataset.actor);
    highlightActor(mySpan.dataset.actor)
  });
}
function highlightActor(actor){
  for(const mySpan of spans){
    if(actor == mySpan.dataset.actor){
      mySpan.style.backgroundColor = "#3c395c";
    }else{
      mySpan.style.backgroundColor = "#73729a";
    }
  }
 }
