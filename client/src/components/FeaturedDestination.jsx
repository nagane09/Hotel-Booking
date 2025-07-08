import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import { useNavigate } from 'react-router-dom'
import Title from './Title'

const FeaturedDestination = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      
      <Title title='Featured Destination' subTilte='Discover our hand-picked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'/>
      
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>

      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 py-3 text-sm font-medium border border-gray-300 rounded bg-zinc-800 hover:bg-zinc-600 transition-all cursor-pointer text-white
'>View All Destinations</button>
    </div>
  )
}

export default FeaturedDestination
