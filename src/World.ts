import CollisionHandler from "./Handler";
import Sprite from "./Sprite";
import { rl } from "./util";

export default class World {
    private axis = <Sprite[] | undefined[]>Array.from(Array(30));
    public collisionChain: CollisionHandler;

    constructor(collisionChain: CollisionHandler) {
        this.collisionChain = collisionChain;
    }

    async initialize(...sprites: Sprite[]) {
        sprites.forEach((sprite) => {
            sprite.setWorld(this);
            this.axis[sprite.coord] = sprite;
        });
    }

    async start() {
        while (true) {
            console.log("Current axis values:", this.axis);
            const startCoord = await rl.question("---\nPlease enter the coord of sprite you want to move:");
            const destinationCoord = await rl.question("---\nPlease enter the destination coord:");
            const startSprite = this.axis[Number(startCoord)];
            const destinationSprite = this.axis[Number(destinationCoord)];
            if (!startSprite) {
                console.log("Can't move because startSprite is undefined");
                continue;
            }
            if (startSprite && destinationSprite) this.collisionChain.handle(startSprite, destinationSprite);
            else this.moveSprite(Number(startCoord), Number(destinationCoord));
        }
    }

    removeSprite(sprite: Sprite) {
        this.axis[sprite.coord] = undefined;
    }

    moveSprite(startCoord: number, destinationCoord: number) {
        const startSprite = this.axis[startCoord];
        if (!startSprite) throw new Error("startSprite is undefined");
        startSprite.coord = destinationCoord;
        this.axis[startCoord] = undefined;
        this.axis[destinationCoord] = startSprite;
    }
}
