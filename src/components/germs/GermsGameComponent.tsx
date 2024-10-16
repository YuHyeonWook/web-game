import { useEffect } from "react";
import Phaser from "phaser";
import Boot from "./Boot";
import Preloader from "./Preloader";
import MainMenu from "./MainMen";
import MainGame from "./Game";

const GermsGameComponent = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#000000",
      parent: "phaser-game",
      scene: [Boot, Preloader, MainMenu, MainGame],
      physics: {
        default: "arcade",
        arcade: { debug: false },
      },
    };
    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game"></div>;
};

export default GermsGameComponent;
