var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    particles = [],
    maxParticles = 8;

window.onresize = function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,w,h);
 
function addParticle(){
  for(var i = 0; i < maxParticles; i ++){
    particles.push({
      x: Math.floor(Math.random() * w),
      y: Math.floor(Math.random() * h),
      s: Math.floor(Math.random() * 2) + 1,
      life: Math.floor(Math.random() * 25) + 15,
      color: "rgba(" + Math.floor(Math.random() * 255) + 1 + "," + Math.floor(Math.random() * 255) + 1 + "," + Math.floor(Math.random() * 255) + 1 + "," + Math.random() + ")"
    });
  }
}

setInterval(function(){ 
  
  addParticle();
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,w,h);
  
  for(var i = 0; i < particles.length; i++){
    ctx.fillStyle = particles[i].color;
    ctx.fillRect(particles[i].x, particles[i].y, particles[i].s, particles[i].s);
    particles[i].life--;
    if(particles[i].life <= 0){
      particles.splice(i,1);
    }
  }
  
},30);