const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalid;
  const startcolor = function () {
    if (!intervalid) {
      intervalid = setInterval(changeByColor, 1000);
    }
    function changeByColor() {
      document.body.style.backgroundColor = randomcolor();
    }
  };
  
  const stopcolor = function () {
    clearInterval(intervalid);
    intervalid = null;
  };
  
  document.querySelector('#start').addEventListener('click', startcolor);
  document.querySelector('#stop').addEventListener('click', stopcolor);
  