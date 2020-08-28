function randhome (min, max) {
  var article = document.getElementById("article");
  rand=Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  article.style.backgroundImage= "url('../img/"+rand+".jpg')";
}
