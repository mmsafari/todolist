
adddeleteElement = () =>{
   var mylistNodes = document.getElementsByTagName('LI');
   var i;
   for(i = 0; i < mylistNodes.length ; i++){
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("×");
      span.className= "delete"
      span.appendChild(txt);
      mylistNodes[i].appendChild(span);
   }
}

deleteLI = () => {
   var deleteLI = document.getElementsByClassName('delete');
   for ( i = 0 ; i < deleteLI.length ; i++){
      deleteLI[i].onclick = function () {
         let parentofDelete = this.parentElement;
         parentofDelete.style.opacity = "0";
   
         setTimeout(function(){parentofDelete.style.display = "none"; },400);
         
      }
   }

}
var list = document.querySelector('ul');
   list.addEventListener('click' , function(event){
      if(event.target.tagName === 'LI'){
         event.target.classList.toggle('checked');
      }
});

newLiElement = () =>{

   var li = document.createElement("li");
   var inputvalue = document.getElementById('todoInput').value;
   var litext = document.createTextNode(inputvalue);
   li.appendChild(litext);
   if(inputvalue === ""){
      return false;
   }
   else{
      console.log(litext);
      document.getElementById('listUl').appendChild(li);
      document.getElementById('todoInput').value ="";
      adddeleteElement();
      deleteLI();
   }
   
}

adddeleteElement();
deleteLI();
