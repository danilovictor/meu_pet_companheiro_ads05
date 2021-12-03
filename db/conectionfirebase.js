const userName = document.getElementById('nome');
const userCpf = document.createElement('cpf');
const cidade = document.getElementById('cidade');
const userTel = document.getElementById('telefone');
const userEmail = document.getElementById('email');
const userPass = document.getElementById('password');
const addBtn = document.getElementById('addBtn');


const db = getDatabase();

 function insertData(){
     set(ref(db , "user/"+ userName.value), {
       
    User : userName.value,
    cpf : userCpf.value,
    country : cidade.value,
    telefone : userTel.value,
    email : userEmail.value,
    password : userPass.value
    
    })
    .then(()=>{
        alert('Dados inseridos')
    })
    
    .catch((err)=>{
        alert(' dados não inseridos , error' +err);
    })
 }

 addBtn.addEventListener('click',insertData)