export default class Pickups extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
    this.target = new Phaser.Geom.Point();
  }

  start() {
    this.create(400, 100, "https://labs.phaser.io/assets", "ring");
    this.create(100, 380, "https://labs.phaser.io/assets", "ring");
    this.create(700, 380, "https://labs.phaser.io/assets", "ring");
    this.create(300, 500, "https://labs.phaser.io/assets", "ring");
    this.create(500, 500, "https://labs.phaser.io/assets", "ring");
  }

  collect(pickup) {
    //  Move the pick-up to a new location

    this.outer.getRandomPoint(this.target);

    pickup.body.reset(this.target.x, this.target.y);
  }
}
