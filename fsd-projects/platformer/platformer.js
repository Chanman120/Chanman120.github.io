$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,700,100,20, "lime")
createPlatform(470,570,100,20, "red")
createPlatform(700,440,100,20,"blue")
createPlatform(1000, 675,100,20,"lime")
createPlatform(1200,560,100,20,"red")


    // TODO 3 - Create Collectables
createCollectable("steve", 500, 200, 0.3, 0.2);
createCollectable("steve", 730, 300, 0.3, 0.2);
createCollectable("steve", 1230, 300, 0.3, 0.2);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1500);
createCannon("right", 450, 1500);
createCannon("top", 400, 1500);
createCannon("top", 700, 1500);
createCannon("right", 700, 1500);
createCannon("top", 1000, 1500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
