//for making animated url 
var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

 function loop() {
     location.hash = f[Math.floor((Date.now()/100)%f.length)];

     setTimeout(loop, 50);
 }

 loop();