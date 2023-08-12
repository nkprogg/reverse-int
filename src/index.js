module.exports = function reverse (n) {
      let string = String(Math.abs(n)) ;
      let result = string.split("").reverse().join("");
      
      return Number(result);
}
