class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here.

    
     setInterval( () => {
      printTimeCallback;
      this.currentTime++;
    }, 1000);
  
  }

  /*printTimeCallback(){

  }*/
  

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
