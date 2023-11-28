class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here.

    this.intervalId = setInterval( () => {
      this.currentTime++;
      if( printTimeCallback){

        printTimeCallback();
          
        } 
    
    }, 1000);
  
  }

  

  getMinutes() {
    // ... your code goes here

  return Math.floor(this.currentTime /60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let result = '';
    if(parseInt(value.toString().length) === 1){
      return result = '0' + value;
    } else{
      return value.toString();
    }
    
  
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    //getMinutes();
    console.log(Math.floor(Math.random() * 60));
    const randomMin = Math.floor(Math.random() * 60).getMinutes;
    console.log(randomMin);
    computeTwoDigitNumber(getSeconds( Math.floor(Math.random() * 60)));
    console(getMinutes(Math.floor(Math.random() * 60)));
    
    let result = getMinutes().toString + ':' + computeTwoDigitNumber(getSeconds()).toString;
    console.log(result);
    return result;
  }
}
