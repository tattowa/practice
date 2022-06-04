`use strict`

{ 
   const text = document.getElementById("text");
   const btn = document.getElementById("btn");
   const list = document.querySelector(".list");
   let onetext
   
   btn.addEventListener("click", e => {
      e.preventDefault()
      onetext = text.value;
      text.value=""
      addtext(onetext)

   })
   
   function addtext(tex) {
      listItem = document.createElement("li")
      listItem.innerText = tex;
      list.appendChild(listItem)
   }
   
}