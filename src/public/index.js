import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";
import fight from "./fight";
// create two instances
const fighter = new Fighter("Vladimir", 2);
const improvedFighter = new ImprovedFighter("Anton", 2);
// call fight function

fight(fighter, improvedFighter, 10, 15, 20, 30, 40, 50);
