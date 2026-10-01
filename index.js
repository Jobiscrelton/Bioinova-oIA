const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('ativo');
    });

const video = document.getElementById("meuVideo");

    video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = video.duration;
    });