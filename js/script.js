
// funzione che genera un colore hex random
const randomColor = () => {
	let char = '#';
	const array = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	for (let i = 0; i < 6; i++){
		x = Math.floor(Math.random() * 15);
		char += array[x];
	}
	return char;
}

// funzione che stampa 5 numeri random colorati diversi tra loro
function fiveRandom(where){
    let numbers = [];
    for (let i = 0; i < 5; i++){
        let number;
        let color = randomColor();
        do {
            number = Math.floor(Math.random() * 100) + 1;
        }
        while (numbers.includes(number))
        numbers.push(number);
        if (i!=4){
            where.innerHTML += `<span style="color: ${color}">${number},</span>`
        } else {
            where.innerHTML += `<span style="color: ${color}">${number}</span>`
        }
    }
    return numbers;
}

// funzione che stabilisce se l'utente ha vinto
const winLose = (array1,array2,where1,where2,where3) => {
    let correctNumbers = [];
    console.log(array1);
    console.log(array2);
    for (let i = 0; i < array2.length; i++){
        if (array1.includes(array2[i])) correctNumbers.push(array2[i])
    }
    let x;
    if (array1.length == correctNumbers.length){
        alert('COMPLIMENTI!!! HAI VINTO.')
        x = 'Grande! hai indovinato tutti e 5 i numeri:'
    } else {
        alert('Hai perso! :( ma non ti preoccupare, continua a lavorare sulla tua memoria e vincerai.')
        x = `Ecco i ${correctNumbers.length} numeri che hai indovinato:`
    }
    where1.classList.remove('d-none');
    where2.innerHTML = x;
    where3.innerHTML = correctNumbers;
}

let userNumbers = []

// funzione che prende 5 numeri tramite prompt
const fiveUser = () => {
    for (let i = 0; i < 5; i++){
        let number = parseInt(prompt('Inserisci, uno alla volta, i  5 numeri che hai memorizzato'));
        while (userNumbers.includes(number) ||isNaN(number)){
            number = parseInt(prompt('ATTENZIONE! Inserisci, uno alla volta, i 5 numeri DIVERSI tra loro che hai memorizzato'));
        }
        userNumbers.push(number);
    }
}



const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box:last-of-type');
const userN = document.querySelector('.box .user-numbers');
const userT = document.querySelector('.box .text');
let pcNumbers = fiveRandom(box1);

setTimeout(fiveUser, 1000);
setTimeout(winLose, 1000, pcNumbers, userNumbers, box2, userT, userN);






