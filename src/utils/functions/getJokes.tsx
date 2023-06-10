const options: RequestInit = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
  },
  credentials: 'same-origin',
};

const apiUrl =
  'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist,explicit&amount=';

export const getJokes = async (amount: number) => {
  const url = `${apiUrl}${amount}`;

  const res = await fetch(url, options);
  const json = await res.json();
  return json;
};