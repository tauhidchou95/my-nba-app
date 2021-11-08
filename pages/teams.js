import { data_teams } from "../JSON-Data/data_teams";
import TeamCard from "../components/TeamCard";

const teams  = () => {
  return (  
  <div class="flex grid grid-cols-4">
      {data_teams.map((teams) => (
              <TeamCard logo={teams.logo} city={teams.city} name={teams.name} />   
    ))}     
  </div>
  );
}
 
export default teams;