export const fetchDetails = async id => {
  try {
    const response = await fetch(`https://api.mfapi.in/mf/${id}`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
