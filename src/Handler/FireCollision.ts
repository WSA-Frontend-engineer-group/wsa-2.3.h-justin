import CollisionHandler from ".";
import Fire from "../Sprite/Fire";
import Hero from "../Sprite/Hero";
import Sprite from "../Sprite";
import Water from "../Sprite/Water";

export default class FireCollsion extends CollisionHandler {
    public condition(startSprite: Sprite): boolean {
        return startSprite instanceof Fire;
    }
    public match(startSprite: Sprite, destinationSprite: Sprite): void {
        switch (destinationSprite.constructor) {
            case Fire: {
                console.log("Fire collision with Fire");
                break;
            }
            case Water: {
                console.log("Fire collision with Water");
                startSprite.world?.removeSprite(startSprite);
                destinationSprite.world?.removeSprite(destinationSprite);
                break;
            }
            case Hero: {
                console.log("Fire collision with Hero");
                (destinationSprite as Hero).hp -= 10;
                if (!(destinationSprite as Hero).isAlive()) destinationSprite.world?.removeSprite(destinationSprite);
                startSprite.world?.removeSprite(startSprite);
                break;
            }
            default:
                throw new Error("destinationSprite is not a valid type");
        }
    }
}
