export default {
  get: async (param) => {
    const apiKey = 'fe7100a91a3349dc9028463459018a5e';
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
    };
    let res = await fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&location=${param}`,
      options
    );
    res = await res.json();
    return res;
  },
};
