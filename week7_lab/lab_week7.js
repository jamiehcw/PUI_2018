function Panda(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Panda";
	this.image = "Panda.jpg";
}

function Fish(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Fish";
	this.image = "Fish.jpg";
}

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Dog";
	this.image = "Dog.jpg";
}

var animals = [new Panda(), new Fish(), new Dog()];
var names = ["Amy","Bob","Cathy","Danny","Elise","Fanny","Gertrude","Hope"];

function generateRandomIndex(maxIndex){
	return Math.floor(math.random() * 10);
}

function generateRandomName(maxIndex){
	var randomIdx = generateRandomIndex(animals.length); //to get number that is within the range of 0 to # in array
	return names[randomIdx];
}

function generateRandomAge(){
	var randomIdx = generateRandomIdx(10);
	return randomIdx;
}

function generateRandomAnimal(){
	var randomIdx = generateRandomIndex(animals.length);
	var randomAnimal = animals[randomIdx];

	if (randomAnimal instanceof Panda){
		return new Panda(generateRandomName(), generateRandomAge());
	} else if (randomAnimal isntanceof Fish){
		return new Fish(generateRandomName(), generateRandomAge());
	} else {
		return new Dog(generateRandomName(), generateRandomAge());
	}
}