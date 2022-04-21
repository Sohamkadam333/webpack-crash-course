import axios from 'axios';

function generateJoke() {
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	};

	axios
		.get('https://icanhazdadjoke.com/', options)
		.then((randomJoke) => {
			joke.innerText = randomJoke.data.joke;
		})
		.catch((err) => console.log(err));
}

export default generateJoke;
