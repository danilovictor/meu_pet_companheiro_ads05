let exibirModal = document.getElementById('modaljs');

exibirModal.addEventListener('click',mostrarAlert);

function mostrarAlert(){
     swal( " Seu pedido de adoção está em análise " , " Em breve entramos em contato com você via whatsapp ou E-mail! " , " warning " );
};


function login(event){
     event.preventDefault();
     var usuario = document.querySelector('#emaillogin')[0].value;
     usuario = usuario.toLowerCase();

     var senha = document.querySelector('#senhalogin')[0].value;
     senha = senha.toLowerCase();


     if (usuario =="admin " && senha == "admin"){
          alert('Dados corretos')
          window.location = "adotar.html"
     } 
     else{
          alert('Dados incorretos');
     }
}



