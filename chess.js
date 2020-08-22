var chess = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

let queen = {
  direction: "s",
  position: {
    x: 4,
    y: 3,
  },
};

document.write("Default direction is :  " + queen.direction);
document.write("<br />");

document.write(
  " Default position is : " + chess[queen.position.x][queen.position.y]
);

document.write("<br /> <br /> <br />");

function changeDirection(direction) {
  switch (direction) {
    case "n":
      document.write("your updated direction is north");
      queen.direction = "n";
      break;

    case "s":
      document.write("your updated direction is south");
      queen.direction = "s";
      break;
    case "e":
      document.write("your updated direction is east");
      queen.direction = "e";
      break;
    case "w":
      document.write("your updated direction is west");
      queen.direction = "w";
      break;
    case "ne":
      document.write("your updated direction is north east");
      queen.direction = "ne";
      break;
    case "nw":
      document.write("your updated direction is north west");
      queen.direction = "nw";
      break;
    case "se":
      document.write("your updated direction is south east");
      queen.direction = "se";
      break;
    case "sw":
      document.write("your updated direction is south west");
      queen.direction = "sw";
      break;

    default:
      document.write("enter valid direction");
  }
}

var direction = prompt("Enter new direction");
var steps = prompt("Enter Steps");

changeDirection(direction);

document.write("<br /> <br /> <br />");

jumpMoveForward(queen.direction, parseInt(steps));

function jumpMoveForward(direction, steps) {
  switch (direction) {
    case "n":
      updatedpositionx = queen.position.x - steps;
      if (updatedpositionx >= 8 || updatedpositionx < 0) {
        document.write(updatedpositionx);
        document.write("queen is going out of battlefield");
      } else {
        queen.position.x = updatedpositionx;
        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "s":
      updatedpositionx = queen.position.x + steps;
      if (updatedpositionx >= 8 || updatedpositionx < 0) {
        document.write(updatedpositionx);
        document.write("queen is going out of battlefield");
      } else {
        queen.position.x = updatedpositionx;
        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "e":
      updatedpositiony = queen.position.y + steps;
      if (updatedpositiony >= 8 || updatedpositiony < 0) {
        document.write(updatedpositiony);
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "w":
      updatedpositiony = queen.position.y - steps;
      if (updatedpositiony >= 8 || updatedpositiony < 0) {
        document.write(updatedpositiony);
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "ne":
      updatedpositiony = queen.position.y + steps;
      updatedpositionx = queen.position.x - steps;

      if (
        updatedpositiony >= 8 ||
        updatedpositiony < 0 ||
        updatedpositionx >= 8 ||
        updatedpositionx < 0
      ) {
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        queen.position.x = updatedpositionx;

        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "sw":
      updatedpositiony = queen.position.y - steps;
      updatedpositionx = queen.position.x + steps;

      if (
        updatedpositiony >= 8 ||
        updatedpositiony < 0 ||
        updatedpositionx >= 8 ||
        updatedpositionx < 0
      ) {
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        queen.position.x = updatedpositionx;

        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "se":
      updatedpositiony = queen.position.y + steps;
      updatedpositionx = queen.position.x + steps;

      if (
        updatedpositiony >= 8 ||
        updatedpositiony < 0 ||
        updatedpositionx >= 8 ||
        updatedpositionx < 0
      ) {
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        queen.position.x = updatedpositionx;

        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;

    case "nw":
      updatedpositiony = queen.position.y - steps;
      updatedpositionx = queen.position.x - steps;

      if (
        updatedpositiony >= 8 ||
        updatedpositiony < 0 ||
        updatedpositionx >= 8 ||
        updatedpositionx < 0
      ) {
        document.write("queen is going out of battlefield");
      } else {
        queen.position.y = updatedpositiony;
        queen.position.x = updatedpositionx;

        document.write(
          "After taking " +
            steps +
            "steps" +
            "<br />" +
            "direction :" +
            queen.direction +
            "<br />" +
            "queen position is :" +
            chess[queen.position.x][queen.position.y]
        );
      }
      break;
  }
}
