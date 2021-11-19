export const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
    return fetch(`${MOVIES_API}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },      
    })
    .then(checkResponse);
};