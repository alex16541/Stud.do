var body = document.documentElement;
if (body.requestFullscreen) {
body.requestFullscreen();
} else if (body.webkitrequestFullscreen) {
body.webkitrequestFullscreen();
} else if (body.mozrequestFullscreen) {
body.mozrequestFullscreen();
} else if (body.msrequestFullscreen) {
body.msrequestFullscreen();
}


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Мы прослушиваем событие resize
window.addEventListener('resize', () => {
  // Выполняем тот же скрипт, что и раньше
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
