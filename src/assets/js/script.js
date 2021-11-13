let exibirModal = document.getElementById('modaljs');

exibirModal.addEventListener('click',mostrarAlert);

 const generateId = ()=>{
      Math.random()
 }



function mostrarAlert(){
     swal( ` Seu pedido de adoção está em análise ! Em breve entramos em contato com você via whatsapp ou E-mail! `);
}


function Login(event) {
     event.preventDefault();
     var usuario = document.getElementById('emaillogin').value;
     usuario = usuario.toLowerCase();
     var senha = document.getElementById('senhalogin').value;
     senha = senha.toLowerCase();
   
     if (usuario == "bcf" && senha == "bcf") {
       alert("dados corretos");
       window.location = "index.html";
     }else{
       alert("Dados incorretos, tente novamente");
     }
   }






