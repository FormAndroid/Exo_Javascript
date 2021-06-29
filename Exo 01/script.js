'use strict';


/**** Exo 01 ************************************************************/
const yearBiss = parseInt(prompt('Exo 1 - Veuillez entrer une année'));
const res01 = document.getElementById('res01');

if(isNaN(yearBiss)) {
    res01.innerHTML = 'Erreur de saisie !';
}
else if((yearBiss % 4 === 0 && yearBiss % 100 !== 0) || (yearBiss % 400 == 0)) {
    res01.innerHTML = `L'année ${yearBiss} est bissextille`;
}
else {
    res01.innerHTML = `L'année ${yearBiss} n'est pas bissextille`;
}


/**** Exo 02 ************************************************************/
const result = parseInt(prompt('Exo 2 - Veuillez entrer un resultat'));
const res02 = document.getElementById('res02');

// Solution 1 - Switch valeur
/*
if(isNaN(result) || result < 0 || result > 20) {
    res02.innerHTML = 'Erreur de saisie !';
}
else {
    let grade;

    switch (result) {
        case 20:
            grade = 'Excellent'
            break;
        case 19:
        case 18:
        case 17:
            grade = 'Très bien'
            break;
        case 16, 15, 14, 13:    // Ecriture racourci
            grade = 'Bien'
            break;
        case 12:
        case 11:
        case 10:
            grade = 'Suffisant'
            break;
        case 9:
        case 8:
            grade = 'Insuffisant'
            break;
        default:
            grade = 'Echec'
            break;
    }
    res02.innerHTML = `Le resultat ${result} donne le grade « ${grade} »`
}
*/

// Solution 2 - Switch true
if(isNaN(result) || result < 0 || result > 20) {
    res02.innerHTML = 'Erreur de saisie !';
}
else {
    let grade;

    switch (true) {
        case result === 20:
            grade = 'Excellent'
            break;
        case result >= 17:
            grade = 'Très bien'
            break;
        case result >= 13:    
            grade = 'Bien'
            break;
        case result >= 10:
            grade = 'Suffisant'
            break;
        case result >= 8:
            grade = 'Insuffisant'
            break;
        default:
            grade = 'Echec'
            break;
    }

    res02.innerHTML = `Le resultat ${result} donne le grade « ${grade} »`
}

/**** Exo 03 ************************************************************/
// https://regexr.com/
// https://regex101.com/

const regexDate = /^((0[1-9])|([1-2][0-9])|(3[0-1]))\-((0[1-9])|(1[0-2]))\-\d{4}$/ ;

const userDate = prompt('Exo 3 - Veuillez entrer une date (DD-MM-YYYY)');
const res03 = document.getElementById('res03');

if(!regexDate.test(userDate)) {
    res03.innerHTML = 'Le format saisie est incorrect';
}
else { 
    const day = parseInt(userDate.slice(0, 2))
    const month = parseInt(userDate.slice(3, 5))
    const year = parseInt(userDate.slice(-4))

    let maxDayInMonth = [1, 3 , 5, 7, 8, 10, 12].includes(month) ? 31 : 30
    if(month === 2) {
        const isBissextile = (yearBiss % 4 === 0 && yearBiss % 100 !== 0) || (yearBiss % 400 == 0);
        maxDayInMonth = isBissextile ? 29 : 28;
    }
    
    if(day <= maxDayInMonth) {
        const d = new Date(year, month -1, day);
        const weekday = d.toLocaleString('fr-BE', {weekday: 'long'});

        res03.innerHTML = `Le jour tombe un ${weekday}`;
    }
    else {
        res03.innerHTML = 'La date est incorrect';
    }
}
