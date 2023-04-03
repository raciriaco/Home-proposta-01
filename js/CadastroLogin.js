const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


var email = document.getElementById("email");
const senha = document.getElementById("senha");
const placa = document.getElementById("placa").value;
var cnpjCpf = document.getElementById("cnpjCpf");

document.getElementById("botao1").disabled = false;


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function validateFormEmail() {
  var criarbtn = document.getElementById("criarbtn");
    if (!validateEmail(email.value)) {
      alert("Insira um email válido");
      criarbtn.disabled = true;
      location.reload();
      return false;
     
    }
    return true;
  }

  //function validatePassword(senha) {
    //var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,}$/;
    //return re.test(senha);
//}

function validateFormSenha(){
  var criarbtn = document.getElementById("criarbtn");
  if ((senha.value) == '') {
    alert("O campo senha não pode estar vazio!");
    criarbtn.disabled = true;
      location.reload();
    return false;
  }

  return true;
}

function validatePlate(placa) {
    var re = /^[A-Z]{3}\d{4}$/;
    return re.test(placa);
  }

 function validateFormPlaca(){
  var criarbtn = document.getElementById("criarbtn");
    if (!validatePlate(placa.value)) {
        alert("Insira uma placa de veículo válida");
        criarbtn.disabled = true;
        location.reload();
        return false;
        
      }
      
      return true;
  }
 
        function validarCPF() {
          var cpf = document.getElementById("cpf").value;
          var criarbtn = document.getElementById("criarbtn")
          
          cpf = cpf.replace(/[^\d]+/g,''); // remove caracteres não numéricos
  
          if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) {
            alert("CPF inválido");
            criarbtn.disabled = true;
        location.reload();

            return false;
          }
  
          // calcula os dígitos verificadores
          var soma = 0;
          for (var i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
          }
          var resto = 11 - (soma % 11);
          var dv1 = (resto > 9) ? 0 : resto;
  
          soma = 0;
          for (var i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
          }
          resto = 11 - (soma % 11);
          var dv2 = (resto > 9) ? 0 : resto;
  
          // verifica se os dígitos verificadores estão corretos
          
          if (cpf.charAt(9) != dv1 || cpf.charAt(10) != dv2) {
            alert("CPF inválidoo");
            criarbtn.disabled = true;
            location.reload();
            return false;
          }

          return true;
        }