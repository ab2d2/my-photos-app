export const getCharacterList = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(errors => {
      return {
        errors: errors
      };
    });
};
