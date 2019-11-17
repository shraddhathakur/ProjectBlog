var c=0;
function func()
{
  c=c+1;
   if((c%2)!=0)
   {
     document.getElementById('blogBody').contentEditable = true;
     document.getElementById('button_btn-edit').innerHTML=`<i class="fa fa-save" ></i> Save`;
   }
   else if((c%2)==0)
   {
     document.getElementById('blogBody').contentEditable = false;
     document.getElementById('button_btn-edit').innerHTML=`<i class="fa fa-edit"></i> Edit`;
   }
}


let x =0;
  function likeMe() {
      document.getElementById('likeButton').innerHTML="Liked";
      x++;
      if (x==1) {
        document.getElementById('showCount').innerHTML=x + " person has liked this!";
      }
      else
      document.getElementById('showCount').innerHTML=x + " people have liked this!";
    // body...
  }


var myDiv = document.getElementById("listOfItems");
   function addItem() { 

          let itemValue = document.getElementById("commentId").value;
      var p = document.createElement("p");
      p.style.cssText = 'border:20px solid lightgrey; padding: 7px;';
      p.innerHTML = (itemValue); 
      myDiv.appendChild(p); 
      var t = "All comments";
document.innerHTML = t;
      document.getElementById("commentId").value = "";
      
    }




 function signInAction(){
  document.getElementsByClassName("modal2")[0].style.display="block";
}
function signUpAction(){
  document.getElementsByClassName("modal1")[0].style.display="block";
}
function closee(){
  //console.log(1)
  document.getElementsByClassName("modal2")[0].style.display="none";
  document.getElementsByClassName("modal1")[0].style.display="none";
  document.getElementsByClassName("modal")[0].style.display="none";
}
function signUpClk(){
  document.getElementsByClassName("modal2")[0].style.display="none";
  signUpAction();
}