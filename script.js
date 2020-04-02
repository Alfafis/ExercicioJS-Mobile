window.onload = function () {
   timerId();
}

function despertador() {
   alert('Despertando!')
}

function despertar() {
   let input = document.querySelector('#despertador')
   setTimeout(despertador, input.value)
}

function tomarAgua() {
   console.log('Tomar Agua')
   alert('Hora de tomar Agua!')
}

let timerId = function () {
   setTimeout(tomarAgua, 10000)
}

function loading() {
   console.log('teste')
   let loading = document.querySelector('#loading')
   loading.innerHTML = "<img src='https://media1.tenor.com/images/a388b52cb0b98b71066ce08b9fcc21c5/tenor.gif' />"
   setTimeout(trocaTexto, 5000)
}

function trocaTexto() {
   let loading = document.querySelector('#loading')
   loading.innerHTML = "Carregado com sucesso"

}

function escrevaNumeros(inicio, fim) {}