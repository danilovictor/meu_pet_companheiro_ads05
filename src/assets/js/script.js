let exibirModal = document.getElementById('modaljs');

exibirModal.addEventListener('click',mostrarAlert);

function mostrarAlert(){
     swal( " Seu pedido de adoção está em análise " , " Em breve entramos em contato com você via whatsapp ou E-mail! " , " warning " );
};
