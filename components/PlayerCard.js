import React from 'react'
import playerHandler from '../pages/api/playerCardFinder'
import { data_teams } from '../JSON-Data/data_teams'

export default function PlayerCard(props) {
    return (
        <div class="flex items-center justify-center p-2">
            <div class="border grid grid-rows-2 bg-white h-84">
                <div class="grid grid-cols-3 row-span-2">
                    <div class="h-52">
                        <img class="object-scale-down h-40 ml-4 mt-12" src={props.headshot}/>
                    </div>
                    <div class="p-3 ">
                        <div class="flex items-center justify-center font-thin text-gray-400 ml-4 mt-20 text-sm">
                            #{props.num} | {props.pos} 
                        </div>
                        <div class="flex items-center justify-center font-sans font-bold ml-4 text-xl">
                            {props.fn}
                        </div>
                        <div class="flex items-center justify-center font-bold ml-4 text-xl">
                            {props.ln}
                        </div>                                   
                    </div>
                    <div class="p-3 ">
                        <img class="object-scale-down h-20 ml-28" src= {playerHandler(props.ta, data_teams)}/>
                    </div>
                </div>
                <div class="grid grid-cols-3 border-t-8 border-blue-400 h-20">
                    <div class="border">
                        <div class="flex items-center justify-center text-sm mt-2">PPG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {props.pts}</div>
                    </div>
                    <div class="border ">
                        <div class="flex items-center justify-center text-sm mt-2">RPG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {props.reb}</div>
                    </div>
                    <div class="border">
                        <div class="flex items-center justify-center text-sm mt-2">APG</div>
                        <div class="font-bold flex items-center justify-center text-lg "> {props.ast}</div>
                    </div>
                </div>


            </div>
        </div>
      
    )
}


