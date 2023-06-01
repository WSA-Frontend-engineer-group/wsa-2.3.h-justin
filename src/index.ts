import Fire from "./Sprite/Fire";
import FireCollsion from "./Handler/FireCollision";
import HeroCollsion from "./Handler/HeroCollision";
import WaterCollsion from "./Handler/WaterCollision";
import Hero from "./Sprite/Hero";
import Water from "./Sprite/Water";
import World from "./World";

const randomSprites = Array.from(Array(10)).map(() => {
    const random = Math.floor(Math.random() * 3);
    const coord = Math.floor(Math.random() * 30);
    switch (random) {
        case 0:
            return new Fire(coord);
        case 1:
            return new Water(coord);
        default:
            return new Hero(coord);
    }
});
const collisionChain = new WaterCollsion(new FireCollsion(new HeroCollsion(undefined)));
const world = new World(collisionChain);
world.initialize(...randomSprites).then(() => world.start());
