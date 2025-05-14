function autenticar (){ 
    const login =document.getElementById("login").value;
    const password = document.getElementById ("semha").value;

    const usuario = 'Guilherme'
    const senha =' 123'
if(!login ?? ! password){
    if (login)
    document.getElementById('errologin'). 
    innerText= 'preenchimento obrigatorio';
     if(!password)
     document.getElementById('erropassoword').
     innerText='preenchimento obrigatorio';
     
     return
    
}

if(usuario== login && password == semha)
alert('usuario atentcado com sucesso!!!')
else
alert('usuario não atenticado!!!')
}
