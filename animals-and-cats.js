var Animal = function(animal) {
  this.walk = function() {
    console.log(animal, 'is walking');
  };
  this.eat = function(food) {
    console.log(animal, 'is eating ' + (food ? food : ''));
  };
};


function getCat(cat) {
  var newCat = Object.create(new Animal(cat));
  function meow() {
    console.log(cat, 'is meowing');
  }
  function purr() {
    console.log(cat, 'is purring');
  }
  newCat.meow = meow;
  newCat.purr = purr;

  return newCat;
}

var cat = getCat('some cat');
var another = getCat('another cat');

cat.walk();
cat.eat();
cat.eat('meat');
cat.meow();
cat.purr();
another.walk();

console.log(cat instanceof Animal);
