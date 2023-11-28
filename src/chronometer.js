class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here.

      setInterval( () => {
      this.currentTime++;
     // printTimeCallback();
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
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
