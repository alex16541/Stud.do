
// function styleBlue(){
//     let sidebarItems = document.querySelectorAll('.sidebar__item');
//     for (let i = 0; i < sidebarItems.length; i++) {
//         const item = sidebar_Items[i];
//         item.style.backgroundColor = "#555";
        
//     }
// }
// styleBlue();

// document.addEventListener("load", function() {
let sid = document.querySelector('.sidebar');
let content = document.querySelector('.content');
let r = document.querySelector('.resize');

let curr_width = sid.offsetWidth;
let unlock = false;

document.addEventListener('mousemove', function(e) {
  let change = curr_width + (e.clientX - curr_width);
  if (unlock) {
    if (change > 199) {
      
      sid.style.width = change+'px';

      console.log(sid.style.width);
    } else {
        sid.style.width = '200px';

        console.log("else "+change);
    }
  }
});

r.addEventListener('mousedown', function(e) {
  curr_width = sid.offsetWidth;
  unlock = true;
});
document.addEventListener('mouseup', function(e) {
    curr_width = sid.offsetWidth;
    unlock = false;
  });

document.addEventListener('mousedown', function(e) {
  if (unlock) {
    e.preventDefault();
  }
});

  