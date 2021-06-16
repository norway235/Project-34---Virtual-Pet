//Create variables here
var dog, happyDog, database, foodS, foodStock, foodCount;

function preload()
{
  //load images here
  dogImage = loadImage ("Images/dogImg.png"); 
  happyDog = loadImage ("Images/dogImg1.png"); 
}

function setup() {
	createCanvas (500, 500); 
  
  dog = createSprite (250, 250, 40, 40); 
  dog.addImage(dogImage); 
  dog.scale = 0.3; createCanvas(800, 700);
  
  console.log("30");

  database = firebase.database();
  foodStock = database.ref('Food'); 
  foodStock.on("value", readStock);
   
  console.log("40");

  
}


function draw() {  
  background(46, 139, 87); 

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  } 


  drawSprites();

  fill(255,255,254);
  stroke("black");
  text ("Food Remaining: " + foodS, 200, 100); 

  
  /*
  if (foodS <= 0) { 
    fill ("white"); 
    text ("You are out of food!", 200, 100);
  } else { 
    fill ("white"); 
    text ("Press the Up-Arrow key to feed the dog", 150, 15); 
    fill ("white"); 
    
  } 
  */
}

function readStock(data){
  console.log("50");
  foodS = data.val();
  console.log(foodS);
}

function writeStock(foodCount) {
  if (foodCount <= 0) {
    foodCount = 0;
  } else {
    foodCount = foodCount -1;
  }

  database.ref("/").update({
    Food: foodCount
  })

}


