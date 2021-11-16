export const BASE_URL = 'https://api.chernyshova.movie.nomoredomains.work';

const checkResponse = (res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({name, email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({name, email, password})
    })
    .then(checkResponse)
  };


export const login = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};


export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include",
})
  .then(checkResponse)
};

export const setUserInfo = ({ email, name }) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({email, name}),
    }).then(checkResponse);
};

export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
      method: "DELETE",
      credentials: "include",
    }).then(checkResponse);
};

export const getMovies = () => {
    return fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },      
    })
    .then(checkResponse);
  };

export const saveMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then(checkResponse);
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
    }).then(checkResponse);
};

export const deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      headers: this._headers,
      method: "DELETE",
      credentials: "include",
    }).then(checkResponse);
};
