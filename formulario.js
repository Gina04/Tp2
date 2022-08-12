const btnSend = document.getElementById('btn');
 btnSend.addEventListener('click',()=>{
 const inputNombre= document.getElementById('username');
 const inputCorreo = document.getElementById('email')
 const inputMsj = document.getElementById('textarea'); 
 const valueNombre = inputNombre.value;
 const valueCorreo = inputCorreo.value;
 const valueMsj= inputMsj.value;
 console.log(valueNombre); 
 console.log(valueCorreo);
 console.log(valueMsj);

 })