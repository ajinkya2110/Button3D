const button=document.querySelector(".button3d");
button.addEventListener("click",()=>{
    button.textContent="Clicked";
    setTimeout(()=>(button.textContent="Click Me"),1000); 
});