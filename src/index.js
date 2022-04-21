import generateJoke from './generate-joke';
import './styles/main.scss';
import laughingImg from './assets/laughing-emoji-svgrepo-com.svg';

const laughImg = document.getElementById('image');
laughImg.src = laughingImg;
laughImg.style.width = '100px';

generateJoke();

console.log(123);
console.log(1);

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
