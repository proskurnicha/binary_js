// create async function fight
export default async function fight(fighter, improvedFighter, ...point) {

    for (var i = 0; i < point.length ; i++) {
        fighter.hit(improvedFighter, point[i]);

        if(improvedFighter.health <= 0) {
            console.log("ImprovedFighter lost his last health...");
            try {
                const result = await improvedFighter.knockout();
                console.log(result);
                return;
            }
            catch(error){
                console.log(error);
                return;
            }
        }

        improvedFighter.doubleHit(fighter, point[i]);

        if(fighter.health <= 0) {
            console.log("Fighter lost his last health...");
            try {
                const result = await fighter.knockout();
                console.log(result);
                return;
            }
            catch(error){
                console.log(error);
                return;
            }
        }
    }

    console.log("No one won")
}