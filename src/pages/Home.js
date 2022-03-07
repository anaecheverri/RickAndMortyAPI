import getData from '../utils/getData';

const Home = async () => {

  const characters = await getData();

  const view = `
  <div class="Characters">
    ${characters.results.map(character => `
      <article class="Characters-item">
        <div class="Character-item-card">
          <img src="${character.image}" alt="${character.name}">
          </div>
        <div class="Chatacters-item-div">
          <h2>${character.name}</h2>
          <p class="${character.status}">${character.status}</p>  
          </div>
        <div class="Characters-item-info">
        <h3> Name:<span>${ character.name}</span></h3>
        <h3> Status: <span>${character.status}</span></h3>
        <h3> Species: <span>${character.species}</span></h3>
        <h3> Gender: <span>${character.gender}</span></h3>
        </div>
      </article>
      `).join('')}
    </div>
    `;  
  return view;
};

export default Home;