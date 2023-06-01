import CollisionHandler from ".";
import Fire from "../Sprite/Fire";
import Hero from "../Sprite/Hero";
import Sprite from "../Sprite";
import Water from "../Sprite/Water";

export default class HeroCollsion extends CollisionHandler {
    public condition(startSprite: Sprite): boolean {
        return startSprite instanceof Hero;
    }
    public match(startSprite: Sprite, destinationSprite: Sprite): void {
        switch (destinationSprite.constructor) {
            case Fire: {
                console.log("Hero collision with Fire");
                const destinationCoord = destinationSprite.coord;
                destinationSprite.world?.removeSprite(destinationSprite);
                startSprite.world?.moveSprite(startSprite.coord, destinationCoord);
                (startSprite as Hero).hp -= 10;
                if (!(startSprite as Hero).isAlive()) startSprite.world?.removeSprite(startSprite);
                break;
            }
            case Water: {
                console.log("Hero collision with Water");
                (startSprite as Hero).hp += 10;
                const destinationCoord = destinationSprite.coord;
                startSprite.world?.moveSprite(startSprite.coord, destinationCoord);
                destinationSprite.world?.removeSprite(destinationSprite);
                break;
            }
            case Hero: {
                console.log("Hero collision with Hero");
                break;
            }
            default:
                throw new Error("destinationSprite is not a valid type");
        }
    }
}
