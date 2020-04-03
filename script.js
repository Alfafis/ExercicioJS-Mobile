window.onload = function () {
   // timerId()
   teste6()
   fetchAPI()
   getFetch()
   escrevaNumeros()
   escrevaNumeros2()
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

function escrevaNumeros(params) {

}

function escrevaNumeros2() {
   let numero1 = prompt("Escolha o numero Inicial: ")
   let numero2 = prompt("Escolha o numero Final: ")
   setTimeout(function aninhado() {
      if (numero1 <= numero2) {
         let x = numero1;
         const numberAlter = document.getElementById("numerosAlter");
         const livre = document.createElement("p");

         livre.innerHTML = x;
         numberAlter.appendChild(livre);
         console.log(numero1)
      }
      numero1++
      setTimeout(aninhado, 1000);
   }, 1000);
}

function teste6() {
   let i = 0;
   setTimeout(() => alert(i), 100); // ?
   for (let j = 0; j < 100000000; j++) {
      i++;
   }
   console.log('Depois do loop')
}

function fetchAPI() {
   fetch('./alimento.json')
      .then(response => response.json())
      .then(function (data) {
         for (let i = 0; i < data.results.length; i++) {
            // criando a <div> titulo
            let divTitle = document.createElement("DIV")
            let divConteudo = document.createTextNode(data.results[i].title)
            divTitle.appendChild(divConteudo)
            // criando o link <a>
            let Card = document.createElement("A")
            Card.href = data.results[i].href
            Card.classList.add('display')
            // criando o thubmanil <img>
            let imgThum = document.createElement("IMG")
            imgThum.src = data.results[i].thumbnail
            // criando o ingredientes <span>
            let spanIng = document.createElement("SPAN")
            let spanConteudo = document.createTextNode(data.results[i].ingredients)
            spanIng.appendChild(spanConteudo)
            // Preenchendo o <a> o titulo, imagem, ingredientes
            Card.appendChild(divTitle)
            Card.appendChild(imgThum)
            Card.appendChild(spanIng)
            // Selecionando id alimentos
            let alimentos = document.getElementById('alimentos')
            // preenchendo o id alimentos com o <a>
            alimentos.appendChild(Card)
         }
      })
}

async function getUserAsync() {
   let response = await fetch('alimento.json');
   let data = await response.json()
   return data;
}

getUserAsync('yourUsernameHere')
   .then(data => console.log(data));