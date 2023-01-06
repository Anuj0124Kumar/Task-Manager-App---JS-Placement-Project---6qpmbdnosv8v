
function addlist(){
  
    document.getElementById('dis').style.display='block';
}
 var count=1;
function content_Add(){
     //creating element which will add in html dynamically
    var header=document.createElement("header")
    var para=document.createElement("p");
    var div=document.createElement("div");
    var icon=document.createElement("i");

     //adding multiple class in div which is child of main_container
     
     div.classList.add('mt-5','change3','todo');
     div.setAttribute("draggable", true);
     icon.classList.add('bi','bi-record-circle-fill');
     icon.setAttribute("id","icon");
     
     var Title=document.getElementById('Title').value;
     var Discription=document.getElementById('discription').value;
      
     // checking corner case when input will empty
     if(Title == ""){
        alert("Hey dear your task is empty!");
        return;
     }
     if(Discription == ""){
        alert("Hey dear task discription is empty!");
        return;
     }
    header.textContent=`${count++}. ${Title}`;
    para.textContent=`${Discription}`
    
    //child appenending in html dynamically
    para.appendChild(icon);
    div.append(header,para);
    var div_Element=document.getElementById("appened_Child");
    div_Element.append(div);
    document.getElementById('dis').style.display='none';




      const todos= document.querySelectorAll(".todo");


     const all_status= document.querySelectorAll(".status");
        let draggableTodo = null;

      todos.forEach((todo) => {
         //todo.setAttribute("draggable",true);
          todo.addEventListener("dragstart",dragStart);
          todo.addEventListener("dragend",dragEnd);
        });
 

      function dragStart(){
        draggableTodo=this;
        console.log("dragStart");
      }

      function dragEnd(){

  
        if(document.getElementById('icon').className == "bi bi-check-all"){
                icon.className = "";
                icon.classList.add('bi','bi-record-circle-fill');
        }

       else if(document.getElementById('icon').className == "bi bi-record-circle-fill" ){
            icon.className = "";
            icon.classList.add('bi','bi-list-task');
            
        }

       else if(document.getElementById('in_review').id == "in_review" && document.getElementById('icon').className == "bi bi-list-task"  ){
            icon.className = "";
            icon.classList.add('bi','bi-pencil-fill');
        }
        else if(document.getElementById('icon').className == "bi bi-pencil-fill"){
            icon.className = "";
            icon.classList.add('bi','bi-check-all');
        }


        let x=document.getElementById('in_review');
         console.log(x.className);
         console.log(x.id);
          draggableTodo="";
         console.log("dragEnd");
    }

      all_status.forEach((stus)=>{
          stus.addEventListener("dragover",dragOver);
          stus.addEventListener("dragenter",dragEnter);
          stus.addEventListener("dragleave",dragLeave);
          stus.addEventListener("drop",dragDrop);
       });

       function dragOver(e){
          e.preventDefault();
          console.log("dragOver");
       }

       function dragEnter(){
        console.log("dragEnter");
       }

      function dragLeave(){
      console.log("dragLeave");
      }  

      function dragDrop(){
        this.append(draggableTodo);
        console.log("dropped");
      }
}











