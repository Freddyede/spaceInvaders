export class GameEngine {
    constructor() {
    }
    init = () => {
        document.getElementById('gameRunner').addEventListener('click', () => {
            let ennemis = document.querySelectorAll('.ennemi');
            ennemis.forEach(element => {
            element.classList.add('hide');
        })
            document.getElementById('menu').classList.add('hide');
            document.getElementById('myGameCanvas').classList.remove('hide');
        });
    }
}