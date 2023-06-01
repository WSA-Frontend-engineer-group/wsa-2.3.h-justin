import Sprite from ".";

export default class Hero extends Sprite {
    public hp = 30;

    constructor(coord: number) {
        super(coord);
    }

    isAlive(): boolean {
        return this.hp > 0;
    }
}
