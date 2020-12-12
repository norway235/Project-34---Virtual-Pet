var dog, dogImage, happyDog, database, foodStock;

var gameState = "FoodInStock"

function preload() {
  dogImage = loadImage("Dog.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250, 250, 40, 40);
  dog.addImage(dogImage);
  dog.scale = 0.3;
  //database = firebase.database();
  //foodStock = database.ref("Food");
  //foodStock.on("value", readStock);
  foodStock = 20;
}


function draw() {  
  background(46, 139, 87);

  if (keyDown(UP_ARROW) && gameState === "FoodInStock") {
    //writeStock(foodS);
    foodStock = foodStock -1;
    dog.addImage(happyDog);
    setTimeout(() => { dog.addImage(dogImage); }, 1000); 
  }

  if (foodStock <= 0) {
    gameState = "FoodOutOfStock";
  }

  drawSprites();

  if (gameState === "FoodInStock") {
    fill("white");
    text("Press the Up-Arrow key to feed the dog", 150, 15);
    fill("white");
    text("Food Remaining: "+foodStock, 200, 100);
  } else {
    fill("white");
    text("You are out of food!", 200, 100);
  }
}



