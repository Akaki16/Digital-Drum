'use strict';

const board = document.getElementById('board');

const sounds = {
    'A': 'sounds/first-sound.mp3',
    'S': 'sounds/second-sound.mp3',
    'D': 'sounds/third-sound.mp3',
    'F': 'sounds/fourth-sound.mp3',
    'G': 'sounds/fifth-sound.mp3',
    'H': 'sounds/sixth-sound.mp3'
};

const soundsClone = {
    'KeyA': 'sounds/first-sound.mp3',
    'KeyS': 'sounds/second-sound.mp3',
    'KeyD': 'sounds/third-sound.mp3',
    'KeyF': 'sounds/fourth-sound.mp3',
    'KeyG': 'sounds/fifth-sound.mp3',
    'KeyH': 'sounds/sixth-sound.mp3'
};

// set globals
let BOARD_WIDTH = '800px';
let BOARD_HEIGHT = 'auto';
let BOARD_COLOR = '#333';
let BOARD_POSITION = '0 auto';
let BOARD_POSITION_TYPE = 'relative';
let BOARD_TOP = '80px';
let BOARD_PADDING = '20px';

// set board styles
board.style.position = BOARD_POSITION_TYPE;
board.style.top = BOARD_TOP;
board.style.width = BOARD_WIDTH;
board.style.height = BOARD_HEIGHT;
board.style.backgroundColor = BOARD_COLOR;
board.style.margin = BOARD_POSITION;
board.style.padding = BOARD_PADDING;

const createBoardElements = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <button class="board-btn" data-target="A" type="button">
            key: A
        </button>
        <button class="board-btn" data-target="S" type="button">
            key: S
        </button>
        <button class="board-btn" data-target="D" type="button">
            key: D
        </button>
        <button class="board-btn" data-target="F" type="button">
            key: F
        </button>
        <button class="board-btn" data-target="G" type="button">
            key: G
        </button>
        <button class="board-btn" data-target="H" type="button">
            key: H
        </button>
    `;
    board.appendChild(container);
}

const playSound = (pass_sound) => {
    const sound = new Audio(pass_sound);
    sound.play();
}

const playSoundsUsingClick = (sounds) => {
    const btns = document.querySelectorAll('.board-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', e => {
            Object.entries(sounds).forEach((key, value) => {
                const target = e.target.dataset.target
                if (target === key[0]) {
                    playSound(key[1]);
                }
            });
        });
    });
}

// index means which button to add styles
const addBtnStyles = (btns, index, bgColor, textColor) => {
    btns[index].style.backgroundColor = bgColor;
    btns[index].style.color = textColor;
    setTimeout(() => {
        btns[index].style.backgroundColor = '';
        btns[index].style.color = '';
    }, 500);
}

const setBtnStyles = (target) => {
    const btns = document.querySelectorAll('.board-btn');
    switch (target) {
        case 'KeyA':
            // add styles to first button
            addBtnStyles(btns, 0, 'rgb(86, 86, 102)', '#fff');
            break;
        case 'KeyS':
            addBtnStyles(btns, 1, 'rgb(86, 86, 102)', '#fff');
            break;
        case 'KeyD':
            addBtnStyles(btns, 2, 'rgb(86, 86, 102)', '#fff');
            break;
        case 'KeyF':
            addBtnStyles(btns, 3, 'rgb(86, 86, 102)', '#fff');
            break;
        case 'KeyG':
            addBtnStyles(btns, 4, 'rgb(86, 86, 102)', '#fff');
            break;
        case 'KeyH':
            addBtnStyles(btns, 5, 'rgb(86, 86, 102)', '#fff');
            break;
    }
}

const playSoundsUsingKeys = (sounds) => {
    document.addEventListener('keydown', e => {
        const target = e.code;
        setBtnStyles(target);
        Object.entries(sounds).forEach((key, value) => {
            if (target === key[0]) {
                playSound(key[1]);
            }
        });
    });
}

const playSounds = () => {

    playSoundsUsingClick(sounds);
    playSoundsUsingKeys(soundsClone);

}

const App = () => {

    createBoardElements();
    playSounds();

}

App();