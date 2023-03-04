/*
1 = caetano
2 = vini
3 = nico
4 = flavio
5 = gabriel
6 = fernando
7 = flavio
8 = flavio
*/

const fundo = document.querySelector("#fundo");
const btn = document.querySelector("#btn");

function spin(){
    const min = 1
    const max = 8

    const sort = Math.floor((Math.random() * max) + min);
    //document.getElementById("resultado").innerHTML = sort;

    if(sort === 1){
        document.getElementById("nome").innerText = "caetano";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/caetano.png'>";
    }else if(sort === 2){
        document.getElementById("nome").innerText = "vini";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/vini.jpeg'>";
    }else if(sort === 3){
        document.getElementById("nome").innerText = "nico";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/nico.jpeg'>";
    }else if(sort === 4){
        document.getElementById("nome").innerText = "flavio";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/flavio.png'>";
    }else if(sort === 5){
        document.getElementById("nome").innerText = "gabriel";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/gabriel.png'>";
    }else if(sort === 6){
        document.getElementById("nome").innerText = "fernando";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/fernando.png'>";
    }else if(sort === 7){
        document.getElementById("nome").innerText = "flavio";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/flavio.png'>";
    }else if(sort === 8){
        document.getElementById("nome").innerText = "flavio";
        document.getElementById("foto").innerHTML = "<img id='img' src='fotos/flavio.png'>";
    }

}