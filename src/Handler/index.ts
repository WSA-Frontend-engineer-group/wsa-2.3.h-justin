import Sprite from "../Sprite";

export default abstract class CollisionHandler {
    protected next: CollisionHandler | undefined = undefined;
    constructor(next: CollisionHandler | undefined) {
        this.next = next;
    }
    public abstract condition(startSprite: Sprite): boolean;
    public abstract match(startSprite: Sprite, destinationSprite: Sprite): void;
    public handle(startSprite: Sprite, destinationSprite: Sprite) {
        if (this.condition(startSprite)) {
            this.match(startSprite, destinationSprite);
        } else {
            this.next?.handle(startSprite, destinationSprite);
            return;
        }
    }

}
