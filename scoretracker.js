const scoresList = document.getElementById("scoresList");
const scores = JSON.parse(localStorage.getItem("scores")) || [];

scoresList.innerHTML = scores
  .map(score => {
    return `<li class="score">${score.name} - ${score.score}</li>`;
  })
  .join("");
