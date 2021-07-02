// Recup des balises
const budgetInitial = document.getElementById('budgetInitial');
const budget = document.getElementById('budget');
const depenseMax = document.getElementById('depenseMax');
const depenseAvg = document.getElementById('depenseAvg');

// Interaction user
const budgetAmount = parseFloat(prompt('Budget prévu ?')?.replace(',', '.'));
console.log(budgetAmount);

budgetInitial.innerHTML = budgetAmount;


const depenses = [];

const message = 'Veuillez encoder une dépense ("q" pour quitter)';
let inputUser = prompt(message);
let total = 0;
while (inputUser !== 'q') {
    const amount = parseFloat(inputUser?.replace(',', '.'));

    if(isNaN(amount)) {
        alert('T\'as tout cassé :o');
    }
    else if(total + amount <= budgetAmount) {
        let isOk = true;
        if(depenses.includes(amount)) {
            isOk = confirm('Cette somme a déjà été encoder, êtes vous sûr ?')
        }

        if(isOk) {
            total += amount;
            depenses.push(amount);
        }  
    }
    else {
        alert('Pas assez de budget ! :( ');
    }

    inputUser = prompt(message);
}


// Calcul
console.log(depense);
const depenseTotal = depenses.reduce((total, current) => total + current, 0);

budget.innerHTML = (budgetAmount - depenseTotal);
depenseAvg.innerHTML = (depenseTotal / depenses.length);
depenseMax.innerHTML = Math.max(...depenses);
