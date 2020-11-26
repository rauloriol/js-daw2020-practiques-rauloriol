const email = document.forms.login.email;
const pass = document.forms.login.password;
const mens1 = document.getElementById('mensaje1');
const mens2 = document.getElementById('mensaje2');

const corr = document.getElementById('correo');
corr.addEventListener('focusout', function (ev) {
  const exp = /\S+@\S+\.\S+/;
  if (exp.test(email.value) === false) {
    ev.preventDefault();
    mens1.style.color = 'red';
    mens1.innerHTML = 'Error formato incorrecto xxx@####.####';
  }
});

corr.addEventListener('focusout', function (ev) {
  const exp = /\S+@\S+\.\S+/;
  if (exp.test(email.value) === true) {
    mens1.innerHTML = '';
  }
});

const contrasenya = document.getElementById('passwd');
contrasenya.addEventListener('focusout', function (ev) {
  const exp = /^[a-zA-Z]{8,10}$/;
  if (exp.test(pass.value) === false) {
    ev.preventDefault();
    mens2.style.color = 'red';
    mens2.innerHTML = 'Error! Constraseña de 8 a 10 caracteres';
  }
});

contrasenya.addEventListener('focusout', function (ev) {
  const exp = /^[a-zA-Z]{8,10}$/;
  if (exp.test(pass.value) === true) {
    ev.preventDefault();
    mens2.innerHTML = '';
  }
});
