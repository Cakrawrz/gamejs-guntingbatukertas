const Result = document.querySelector('#hasil');
const Score = document.querySelector('#score');
let userScore = 0, compScore = 0;

function startGame(pilih) {
    let userChoice = pilih;
    let array = ['batu', 'gunting', 'kertas'];
    let compChoice = array[Math.floor(Math.random()*3)];
    console.log(compChoice);
    let winner = compare(userChoice, compChoice);
    Result.classList = '';

    if (winner == 'user') {
        Result.innerHTML = winner + 'wins';
        Result.classList.add('bg-success', 'rounded-4', 'p-2');
    } else if(winner == 'computer') {
        Result.innerHTML = winner + 'wins';
        Result.classList.add('bg-danger', 'rounded-4', 'p-2');
    } else {
        Result.innerHTML = winner;
        Result.classList.add('bg-secondary', 'rounded-4', 'p-2');
    }

    Score.innerHTML = `<span class="bg-secondary bg-opacity-50 rounded-4 py-2 px-3">User : ${userScore}</span>
    <span class="bg-secondary bg-opacity-50 rounded-4 py-2 px-3">Computer : ${compScore}</span>`
}

function compare(user, comp) {
    if  (user === comp) {
        return 'Seri';
    } else if (user == 'batu') {
        if (comp == 'gunting') {
            userScore++;
            return 'user';
        } else if (comp == 'kertas') {
            compScore++;
            return 'computer';
        }
    } else if (user == 'gunting') {
        if (comp == 'kertas') {
            userScore++;
            return 'user';
        } else if (comp == 'batu') {
            compScore++;
            return 'computer';
        }
    } else if (user == 'kertas') {
        if (comp == 'gunting') {
            userScore++;
            return 'user';
        } else if (comp == 'kertas') {
            compScore++;
            return 'computer';
        }
    }
}