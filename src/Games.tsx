import SectionTitle from "./components/SectionTitle";
import GameTemplate from "./components/GameTemplate";
import { games } from "./data/gamesList";
export default function Games(){
    return (
        <div className="namedSection" id="games">
            <SectionTitle title="2. Games" />
            <div className="GamesListContainer">
                {games.map((game) =>(
                    <GameTemplate title={game.title} description={game.description} link={game.link} thumbnailPath={game.imagePath}/>
                ))}
            </div>
        </div>
    )
}