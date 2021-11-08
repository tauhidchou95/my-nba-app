import React from 'react'

export default function TeamCard(props) {
    return (
        <div class="flex items-center justify-center p-2">
                <div class="grid grid-cols-2 row-span-2 border" >
                    <div class="h-52">
                        <img class="object-scale-down h-40 ml-4 mt-8" src={props.logo}/>
                    </div>
                    <div class="p-3 ">
                        <div class="flex items-center justify-center font-sans font-bold mt-16 ml-2 text-xl">
                            {props.city}
                        </div>
                        <div class="flex items-center justify-center font-bold ml-2 text-xl">
                            {props.name}
                        </div>                                   
                    </div>
            </div>
        </div>
      
    )
}


