let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

function addFullNameProperty(obj,key) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName
  return obj
}

addFullNameProperty(person);
console.log(person.fullName);