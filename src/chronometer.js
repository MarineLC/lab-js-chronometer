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
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());

    return min + ':' + sec;;
  }
}
