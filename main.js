let aim = document.querySelector("#circle");
let balance = document.getElementById("val");

let counter = 15;
let i = 0;
balance.innerHTML = counter;

aim.onclick = () => {
  if (i !== counter) {
    let randomH = Math.floor(Math.random() * 550);
    let randomW = Math.floor(Math.random() * 995);

    // console.log(randomH , " " , randomW)
    aim.style.top = `${randomH}px`;
    aim.style.left = `${randomW}px`;
    // counter ++;
    console.log(counter);
    balance.innerHTML = counter - (i+1);
    i++;
  }
};
