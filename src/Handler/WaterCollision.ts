import CollisionHandler from ".";
import Fire from "../Sprite/Fire";
import Hero from "../Sprite/Hero";
import Sprite from "../Sprite";
import Water from "../Sprite/Water";

export default class WaterCollsion extends CollisionHandler {
    public condition(startSprite: Sprite): boolean {
        return startSprite instanceof Water;
    }
    public match(startSprite: Sprite, destinationSprite: Sprite): void {
        switch (destinationSprite.constructor) {
            case Fire: {
                console.log("Water collision with Fire");
                startSprite.world?.removeSprite(startSprite);
                destinationSprite.world?.removeSprite(destinationSprite);
                break;
            }
            case Water: {
                console.log("Water collision with Water");
                break;
            }
            case Hero: {
                console.log("Water collision with Hero");
                (destinationSprite as Hero).hp += 10;
                startSprite.world?.removeSprite(startSprite);
                break;
            }
            default:
                throw new Error("destinationSprite is not a valid type");
        }
    }
}
