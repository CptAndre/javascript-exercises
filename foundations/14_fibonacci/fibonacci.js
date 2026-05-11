const fibonacci = function(value) {
  
  valuechange = parseInt(value);

  if(valuechange < 0){
    return "OOPS";
  }

  if(valuechange == 0){
    return 0;
  }

  if(valuechange == 2 || valuechange == 1){
    return 1;
  }
  
  let a = 1;
  let b = 1;
  for (let i = 3; i <= valuechange; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
