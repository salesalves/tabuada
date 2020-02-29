document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    

     let email = document.querySelector('#email').value;
     let senha = document.querySelector('#senha').value;

         if (email == 'bruno.sales.alves@gmail.com' && senha == 123) {
            alert(`bem-vindo \n ${email}`);
            window.location.href = "TABUADA/tabuada.html";
            
            } else if(!email){
                alert("Preencha o campo e-mail")
            }
            else if (!senha){
            alert("Preencha o campo Senha");
          
            }else if(!email && !senha){
                alert("Preencha os Campos");
            }else{
                alert("Usuário ou senha incorreto");
            }

});

