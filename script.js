const links=document.getElementById("links")
const bar=document.getElementById("bar")

bar.onclick = function() {
   if (links.style.display=="none") {
      links.style.display="block";
      links.classList.add("show")
   }else{
      links.style.display="none";
      links.classList.remove("show")
   }
 };
