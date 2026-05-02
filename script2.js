let main = document.getElementById("main");

let arr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdlnJTY1G9TOUtN3BSUTvpFMKQiFdGgoKug&s",
  "https://media.cnn.com/api/v1/images/stellar/prod/210226041421-02-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
  "https://media.cnn.com/api/v1/images/stellar/prod/210226041521-03-pokemon-anniversary-design.jpg?q=w_1110,c_fill",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB_JUw1fcOqOOsuUdu0lTmf0tKPIIay0Emg&s",
  "https://media.istockphoto.com/id/534195339/photo/pickachu-toy-character-from-pokemon-anime.jpg?s=612x612&w=0&k=20&c=IQEMX_uCVLqNAu-OcGab6QhUaU8HDbT3rNkqq8Qk9Mo=",
];

let s = ''

for (let i = 0; i <= 100; i++) {
  let n = Math.floor(Math.random()*5)
  s += `<div class="card"><img src=${arr[n]}> </div>`;
}

main.innerHTML = s;

