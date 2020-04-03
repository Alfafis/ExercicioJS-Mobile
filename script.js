window.onload = function () {
   // timerId()
   fetchAPI()
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

// let inicio = document.getElementById('inicio').value;
// let final = document.getElementById('final').value;
// let aux = inicio;

// function escrevaNumeros() {
//    if (aux < final) {
//       Alert();
//    } else {
//       break
//    }
// }

// function Escrever() {
//    var para = document.createElement("P");
//    para.innerText = aux;
//    document.body.appendChild(para);
//    escrevaNumeros();
// }

// function Alert() {
//    setTimeout(Escrever, 5000);
// }

function fetchAPI() {
   fetch('./alimento.json')
      .then(response => response.json())
      .then(function (data) {
         console.log(data.results)
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