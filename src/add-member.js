const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(nameInput.value, jobInput.value);

  const data = {
    name: nameInput.value,
    job: jobInput.value,
  };

  const res = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    console.log('successful');
  } else {
    console.log('unsuccessful');
  }
});
