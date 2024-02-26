let obj = {
  age: 16
};

function isPersonOldEnoughToDrive(obj) {
  // Add your code after this line
  if(obj.age < 16) return false
  else return true
}

let output = isPersonOldEnoughToDrive(obj);
console.log(output);