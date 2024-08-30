
var gameUrls = [
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@699000e1fa30c8a6cd0ed9c0d45b0f8dabedf0c9/build/2048/2048.xml&container=ig", 
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@c0c9f32fd575688ff4b14309e9acf19b73f15e2a/build/bs/bs.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gahaden/BTR5@23cd8bbc75561b010dae47b9d491bf01b0978624/btr5.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@e7d53b913d54429e5e118ca9541fb0f8f1f66bdc/dist/cc.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/eggy-car/ec.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://63547061-480239364844120796.preview.editmysite.com/uploads/b/12311014-374158638346062739/files/hanr2.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@99563e3bf6eb25323e3bd5af20dcd9a261b97991/build/m3m/m3m.xml",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@ef23f79324c37921a9e7e53dadd30c9721235820/build/m3mw/m3mw.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@b8b8a03997f38305098c2f2f5fe14907463cd23b/build/ppo2/ppo2.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@f8de953e5d955baef80e3994a1105d74ad76315b/Rooftop-Snipers.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/WebStarterkit@ebc61d8a952e7630c8c5ca3410335bf5d5f04711/src/sp.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://136620384-873177897590022156.preview.editmysite.com/uploads/b/4181373-127396464257261240/files/aswc.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/debugactions@6e97a528bfcdd0623e0cd99ad352baebf47a6b70/sr3d2.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://728591305-836400173629471539.preview.editmysite.com/uploads/b/139890129-766134333972657537/files/fl.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://471058263-725410472258601738.preview.editmysite.com/uploads/b/139890129-510930859892590631/files/sr.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@86d5e581c990778fefa61244f63e1c1ced5b1e76/build/v4/v4.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@dae52f4583f3cc7612451ea7f02965aeff6077bf/build/v5/v5.xml&container=ig",
    "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@86d5e581c990778fefa61244f63e1c1ced5b1e76/build/v4/v4.xml&container=ig"
  ];

  var gamePics = [
    "/img/2048.png",
    "/img/basketball-stars.png",
    "/img/bob-the-robber-5.png",
    "/img/cookie-clicker.png",
    "/img/eggy-car.jpg",
    "/img/hanger-2.jpg",
    "/img/moto-x3m.jpg",
    "/img/moto-x3m-winter.jpg",
    "/img/paper-io-2.jpg",
    "/img/rooftop-snipers.jpg",
    "/img/slope.jpg",
    "/img/small-world-cup.jpg",
    "/img/snow-rider-3d.jpg",
    "/img/soccer-legends.jpg",
    "/img/soccer-random.jpg",
    "/img/time-shooter-3-swat.jpg",
    "/img/vex-4.jpg",
    "/img/vex-5.jpg",
    "/img/vex-6.jpg"
  ];

  function openGameWindow(gameNumber) {
    return function() {
      var win;
        if (win) {
          win.focus();
        } else {
          win = window.open();
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = `data:text/html;charset=utf-8, <iframe src="` + gameUrls[gameNumber - 1] + `" style="margin:0; padding:0; width:100%; height:100%; border:none;"></iframe>`;
          win.document.body.appendChild(iframe);

          var interval = setInterval(function() {
            if (win.closed) {
              clearInterval(interval);
              win = undefined;
            }
          }, 500);
        }
    };
  }

  document.querySelectorAll('.game').forEach(function(button, index) {
    button.onclick = openGameWindow(index + 1);
    button.style.backgroundImage = `url(${gamePics[index]})`;
  });
