import PlayerCard from "../components/PlayerCard";
import { data_players } from "../JSON-Data/data_players";

const players  = () => {
  return (  
  <div class="flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    { data_players.map((players) => (
              <PlayerCard headshot={players.headshot} pts={players.pts} fn={players.fn} ln={players.ln} reb={players.reb} ast={players.ast} num={players.num} pos={players.pos} ta={players.ta} />   
    ))}     

  </div>
  );
}
 
export default players;