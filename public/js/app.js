const search = document.getElementById("search");
const messageOne = document.getElementById("messageOne");
const messagetwo = document.getElementById("messageTwo");

document.getElementById("weather").addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  const url = `http://localhost:3000/weather?address=${location}`;

  messageOne.innerText = "Loading...";
  messagetwo.innerText = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        messageOne.innerText = data.error;
      } else {
        const summary = data.summary[0];
        const temparture = data.temperature;
        messageOne.innerText = data.location;
        messagetwo.innerHTML = `Mostly ${summary}. It is currently ${temparture} out`;
      }
    });

  search.value = "";
});
