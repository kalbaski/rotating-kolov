document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const scoreCount = document.getElementById("scoreCount");
  let score = 0;
  let collectedMushrooms = 0; 

  function getRandomPosition() {
    const x = Math.floor(Math.random() * (container.offsetWidth - 50));
    const y = Math.floor(Math.random() * (container.offsetHeight - 50));
    return { x, y };
  }

  function createMushroom() {
    const mushroom = document.createElement("div");
    mushroom.className = "mushroom";
    const { x, y } = getRandomPosition();
    mushroom.style.left = `${x}px`;
    mushroom.style.top = `${y}px`;
    container.appendChild(mushroom);

    mushroom.addEventListener("click", function() {
      container.removeChild(mushroom);
      score++;
      collectedMushrooms++; 
      scoreCount.textContent = score;

      if (collectedMushrooms === 50) {
          document.querySelector("img").src = "pngegg.png";
          document.querySelector("img").classList.add("new");
          document.querySelector("img").classList.remove("old");
      } if(collectedMushrooms === 100){
          document.querySelector("img").src = "pngegg2.png";
          document.querySelector("img").classList.add("new2");
          document.querySelector("img").classList.remove("old");
          document.querySelector("img").classList.remove("new");
      }
    });

    setTimeout(() => {
      container.removeChild(mushroom);
    }, 15000);
  }

  setInterval(createMushroom, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
var audioPlayer = document.getElementById('audioPlayer');
audioPlayer.volume = 0.1; 
});
function changeAudio(src) {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = src;
  audioPlayer.play();
}

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
menu.classList.toggle('active');
});