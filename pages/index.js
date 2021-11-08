import { useRouter } from 'next/router'
import useSWR from 'swr'
import playerHandler from './api/playerCardFinder'
import { data_teams } from '../JSON-Data/data_teams'

export default function Home() {

  const teamsFetcher = (url) => fetch(url).then((res) => res.json());
  const playersFetcher = (url) => fetch(url).then((res) => res.json());

  const { data: playersData, error: playersError } = useSWR("/api/players", playersFetcher);
  const { data: teamsData, error: teamsError } = useSWR("/api/teams", teamsFetcher);
  
  if (playersError) return <div>Failed to load</div>;
  if (teamsError) return <div>Failed to load</div>;
  if (!playersData) return <div>Loading...</div>
  if (!teamsData) return <div>Loading...</div>

  return (
 
    <div>
      <div class="lg:flex items-center justify-center p-2">
      <img src="https://i.ytimg.com/vi/KvODVmmraZU/maxresdefault.jpg"/>
      </div>
     
      <ul>
        <div class="flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {playersData.map((players, index) => (      
          <div class="flex items-center justify-center p-2">
            <div class="border grid grid-rows-2 bg-white h-84">
                <div class="grid grid-cols-3 row-span-2">
                    <div class="h-52">
                        <img class="object-scale-down h-40 ml-4 mt-12" src={players.headshot}/>
                    </div>
                    <div class="p-3 ">
                        <div class="flex items-center justify-center font-thin text-gray-400 ml-4 mt-20 text-sm">
                            #{players.num} | {players.pos} 
                        </div>
                        <div class="flex items-center justify-center font-sans font-bold ml-4 text-xl">
                            {players.fn}
                        </div>
                        <div class="flex items-center justify-center font-bold ml-4 text-xl">
                            {players.ln}
                        </div>                                   
                    </div>
                    <div class="p-3 ">
                        <img class="object-scale-down h-20 ml-28" src= {playerHandler(players.ta, data_teams)}/>
                    </div>
                </div>
                <div class="grid grid-cols-3 border-t-8 border-blue-400 h-20">
                    <div class="border">
                        <div class="flex items-center justify-center text-sm mt-2">PPG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {players.pts}</div>
                    </div>
                    <div class="border ">
                        <div class="flex items-center justify-center text-sm mt-2">RPG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {players.reb}</div>
                    </div>
                    <div class="border">
                        <div class="flex items-center justify-center text-sm mt-2">APG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {players.ast}</div>
                    </div>
                </div>
            </div>
          </div>
        ))}
       
        </div>
        

        {teamsData.map((teams) => (
          <div class="flex items-center justify-center p-2">
            <div class="grid grid-cols-2 row-span-2 border" >
                <div class="h-52">
                    <img class="object-scale-down h-40 ml-4 mt-8" src={teams.logo}/>
                </div>
                <div class="p-3 ">
                    <div class="flex items-center justify-center font-sans font-bold mt-16 ml-2 text-xl">
                        {teams.city}
                    </div>
                    <div class="flex items-center justify-center font-bold ml-2 text-xl">
                        {teams.name}
                    </div>                                   
                </div>
            </div>
          </div>
          ))}  
      </ul>
  </div>
  )
}



