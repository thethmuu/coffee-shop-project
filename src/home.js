const featuredContainer = document.querySelector('#featured-container');

let coffees = [];

window.addEventListener('DOMContentLoaded', () => {
  getCoffee();
});

async function getCoffee() {
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  const data = await res.json();
  coffees = data;

  coffees.slice(0, 3).forEach((item) => {
    addCardToContainer(item);
  });
}

function addCardToContainer(coffee) {
  const articleEl = document.createElement('article');
  articleEl.classList.add('featured-card');
  articleEl.innerHTML = `
   <figure class="max-h-64 object-cover">
    <img
      src=${coffee.image}
      alt='Shoes'
    />
  </figure>
  <div class='card-body'>
    <h2 class='card-title'>
      ${coffee.title}
      <div class='badge badge-secondary'>Hot</div>
    </h2>
    <p>
      ${coffee.description}
    </p>
    <div class='card-actions justify-end'>
      <div class='badge badge-outline'>${coffee.ingredients[0]}</div>
    </div>
  </div>
`;
  featuredContainer.appendChild(articleEl);
}
