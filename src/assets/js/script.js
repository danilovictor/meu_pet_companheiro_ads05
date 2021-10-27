let exibirModal = document.getElementById('modaljs');

exibirModal.addEventListener('click',mostrarAlert);

function mostrarAlert(){
     swal( " Seu pedido de adoção está em análise " , " Em breve entramos em contato com você via whatsapp ou E-mail! " , " warning " );
};


function login(){
     var done = 0;
     var usuario = document.getElementById('email')[0].value;
     var senha = document.getElementById('senha')[0].value;

     usuario = usuario.toLowerCase();
     senha = senha.toLowerCase();


     if ( usuario == "admin" & senha =="admin"){
          window.location = "../../../dashboard-admin/dashboard.html"
          done = 1;
     }

     if(done == 0){
          alert('Dados incorretos, tente novamente');
     }


}



