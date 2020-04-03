window.onload = function () {
   timerId()
   teste6()
   fetchAPI()
   getAsync()
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

aux2 = -1

function escrevaNumeros() {
   const inicio = document.querySelector('.inicio').value
   const final = document.querySelector('.final').value
   aux = inicio
   aux2++
   aux = +aux2
   if (aux <= final) {
      Alert()
   } else {
      console.log('voce chegou ao fim')
      let tagP = document.createElement("P")
      tagP.innerText = "Chegou ao fim"
      document.getElementById('preencher').appendChild(tagP)
      aux = 0
      aux2 = -1
   }
}


function Escrever() {
   let tagP = document.createElement("P")
   tagP.innerText = aux
   console.log(aux)
   console.log(tagP)
   document.getElementById('preencher').appendChild(tagP)
   escrevaNumeros()
}

function Alert() {
   let tempo = setTimeout(Escrever, 1000)
}


function escrevaNumeros2() {
   let inicio = document.querySelector('.inicio').value
   let final = document.querySelector('.final').value
   var intervalo = setInterval(() => {
      if (inicio <= final) {
         console.log(inicio)
         console.log(final)
         let tagP = document.createElement("P")
         tagP.innerText = inicio
         document.getElementById('preencher2').appendChild(tagP)
      } else {
         clearInterval(intervalo)
      }
      ++inicio
   }, 1000)
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

async function getAsync() {
   console.log('Usando Async Wait')
   await fetch('alimento.json').then(async (response) => {
      return await response.json()
         .then(function (data) {
            console.log(data.results)
         })
   })
}