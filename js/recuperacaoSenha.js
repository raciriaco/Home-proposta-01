var email = document.getElementById("email");

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validateFormEmail() {

    if (!validateEmail(email.value)) {
      alert("Insira um email válido");
      return false;
    }
    return true;
  }