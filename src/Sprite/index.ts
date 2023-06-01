import World from "../World";

export default abstract class Sprite {
    public world: World | undefined;
    public coord: number;

    constructor(coord: number) {
        this.coord = coord;
    }
    /**
     * 原本會想寫這邊是因為感覺碰撞是 Sprite 與 Sprite 之間的事情，
     * 就跟 showdown 的Card 一樣，比大小是 Card 與 Card 之間的事情，
     * 但因為碰撞鍊是由 World 來管理的，所以只能用 this.world.collisionChain 來處理碰撞，
     * 看了一下子覺得怎麼看怎麼怪，所以改為由 World 來處理碰撞。
     */
    // public collision(startSprite: Sprite, destinationSprite: Sprite) {
    //     this.world?.collisionChain.handle(startSprite, destinationSprite);
    // }
    public setWorld(world: World) {
        this.world = world;
    }
}
