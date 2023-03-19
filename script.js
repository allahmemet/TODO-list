const input = document.querySelector("#ekle");
const btn =document.querySelector("#btn");
const buraya = document.querySelector("#buraya");
let closeBtn;

// Yapılan listesinde bir ögeyi silmek için
const deleteTodo=(e) =>{
  const todo=e.target.parentElement
  const text = todo.firstChild.textContent;

  let todos = JSON.parse(localStorage.getItem("todos"));
  todos= todos.filter(td => td.text !=text);
  localStorage.setItem("todos",JSON.stringify(todos));

  todo.remove()

};

// Listede işimizin kalmadığı işlemin üzerini çizmek için 
// Aynı zamanda localstorage için güncelleme yapıyor
const addCizik = (e)=>{
  const todo= e.target
  const text = todo.firstChild.textContent
  todo.classList.toggle("cizik")
  let todos= JSON.parse(localStorage.getItem("todos"));
  todos.forEach(td=>{
    if(td.text === text){
      td.isComplated= !td.isComplated
      console.log(td.isComplated)
    }
  })
  localStorage.setItem("todos",JSON.stringify(todos));
}
// Sayfaya ekleyeceğimiz elemanların html öğelerini oluşturuyoruz
const addHTML = (todo) =>{
  const todoLi= document.createElement("li")
  todoLi.addEventListener("click",addCizik) // üzerini çizdiğimiz fonksyonu burada tanımlıyoruz
  todoLi.textContent = todo.text;
  if(todo.isComplated){
    todoLi.classList.add("cizik")
  }

  const todoSpan= document.createElement("span")
  const spanText= document.createTextNode("X")
  todoSpan.classList.add("close")
  todoSpan.addEventListener("click", deleteTodo); // delete fonksyonunu burada tanımlıyoruz
  todoSpan.appendChild(spanText)
  todoLi.appendChild(todoSpan)
  buraya.appendChild(todoLi)
  
  
};
// Sayfa ilk açıldığında veya hiç değer yokken boş bir local storage oluşturuyoruz
const startConf = () =>{
  // başlangıç ayarı
  const todos = JSON.parse(localStorage.getItem("todos"))
  if (!todos){
    localStorage.setItem("todos",JSON.stringify([]))
  }else{
    todos.forEach(todo => {
      addHTML(todo);
    });
    
    
  }
};
startConf(); // Bu işlemi hemen çağırıyoruz

// İnputa yazdığımız değerin alındığı ve addHTML ye gönderildiği fonksyon burası
const addTodo = () =>{
  todoText = input.value;
  if (todoText !=""){
  const todo = {
    text:todoText,
    isComplated:false
  };
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));

  addHTML(todo);
  input.value=""
  
  
}else{
  alert("Bir değer girin")
}

};

// Butonla yahut enter tuşuna basınca değer kaydedilmesi için oluşturulmuş addeventler.
btn.addEventListener("click",addTodo);
input.addEventListener("keyup",function(e){
  if(e.keyCode==13){
    addTodo()
  }
})




//! Aşağıdaki daha basit hali (localstorage yok)


// buraya.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("cizik");

//     }
    
// });



// for(i=0;i<close.length;i++){
//     close[i].onclick = function(){
//         let kapat = this.parentElement;
//         kapat.style.display = "none";

//     }
// }



// let buraya = document.getElementById("buraya");
// let ekle = document.getElementById("ekle");
// ekle.addEventListener("keyup",function(e){
//     if(e.keyCode==13 && ekle.value != "" ){
//         let ekle = document.getElementById("ekle");
//         let metin = document.createTextNode(ekle.value);
//         let li = document.createElement("li");
//         li.append(metin);
//         console.log(li)
//         if (ekle.value == "") {
//           alert("Bir şey yazmalısın");
//         } else {
//           document.getElementById("buraya").append(li);
//         }
//         ekle.value = "";
      
      
//         let span = document.createElement("span");
//         let txt = document.createTextNode("X");
//         span.className = "close";
//         span.appendChild(txt);
//         li.appendChild(span);
      
//         var close = document.getElementsByClassName("close");
//         var i;
      
//         for (i = 0; i < close.length; i++) {
//           close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//           };
//         }
//     }else if (e.keyCode==13 && ekle.value == ""){
//         alert("Bir şey yazmalısın")
//     }
// })

// buraya.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("cizik");
//     }
//   });




// let close = document.getElementsByClassName("close")

// for(i=0;i<close.length;i++){
//     close[i].onclick = function(){
//         let kapat = this.parentElement;
//         kapat.style.display = "none";
//     }
// }

// for(i=0; i<pler.length;i++){

//     console.log("a")
// }
