import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()
    const [room , setRoom] = useState(null)
    const [mainImage , setMainImage] = useState(null)

    useEffect(()=>{
        const room=roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
            {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ Reviews</p>
        </div>

        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
        </div>

        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length>1 && room.images.map((image,index)=>(
                    <img onClick={()=>setMainImage(image)} key={index} src={image} alt="" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex items-center mt-3 mb-6 gap-4'>
                            <img src={facilityIcons[item]} alt="" className='w-5 h-5'/>
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>

        <form action="" className='flex flex-row items-start justify-between p-6 shadow-md bg-[rgba(0,0,0,0.015)] rounded-xl mx-auto mt-16 max-w-6xl'>
            <div className='flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                <div className='flex flex-col'>
                    <label htmlFor="checkInDate">Check-In</label>
                    <input type="date" placeholder='Check-In' id='checkInDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="checkOutDate">Check-Out</label>
                    <input type="date" placeholder='Check-Out' id='checkOutDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="guests">Guests</label>
                    <input type="number" placeholder='0' id='checkOutDate' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
            </div>

            <button type='submit' className='bg-primary hover:bg-primary/90 text-white text-base cursor-pointer rounded-md transition-all scale-95 max-md:w-full max-w-md mt-6 md:px-25 py-3 md:py-4
'>Check Availability</button>
        </form>

        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec,index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt="" className='w-6.5'/>
                    <div>
                        <p className='text-base'>{spec.title}</p>
                        <p className='text-gray-500'>{spec.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div class="max-w-3xl border-y border-gray-300 my-16 py-10 text-gray-500">
            <p>
                Guests will be allocated on the ground floor according to the availability.
                You will get the comfortable two-bedroom apartment that has a true city-style feeling.
                The price quoted is for two guests. At the guest slot, please mark the number of guests
                to get the exact price for groups. You get the comfortable two-bedroom apartment that has
                a true city feeling.
            </p>
        </div>

        {/* Hosted by */}
        <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
            <img
            src={room.hotel.owner.image}
            alt="Host"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
            <p className="text-lg md:text-xl">
                Hosted by {room.hotel.name}
            </p>
            <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
            </div>
            </div>
        </div>

        <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
            Contact Now
        </button>
        </div>



    </div>
  )
}

export default RoomDetails
