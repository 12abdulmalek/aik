let count = 0;
let min=0;
setInterval(() => {
    count++;
    console.log('seconds',count);
    if(count==60){
        min++;
        console.log('min = ',min);
    }
  if(count==60){
      count=0;
  }

},1000)