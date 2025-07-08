import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets'; // Make sure this contains `defaultImage`

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  });

  const handleImageChange = (key, file) => {
    setImages({ ...images, [key]: file });
  };

  const handleAmenitiesChange = (amenity) => {
    setInputs({
      ...inputs,
      amenities: {
        ...inputs.amenities,
        [amenity]: !inputs.amenities[amenity]
      }
    });
  };

  return (
    <form className="max-w-4xl mx-auto min-h-40 bg-white shadow rounded">
      <Title 
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."
      />

      {/* Image Upload Section */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-1 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img 
              className="h-15 w-20 object-cover cursor-pointer opacity-80 border rounded" 
              src={images[key] ? URL.createObjectURL(images[key]) : assets.defaultImage} 
              alt={`Room ${key}`} 
            />
            <input 
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => handleImageChange(key, e.target.files[0])}
            />
          </label>
        ))}
      </div>

      {/* Room Details */}
      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-xs">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select 
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>

          
        </div>
        <p className="mt-4 text-gray-800">Price <span className="text-xs">/night</span></p>
          <input 
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
          />
      </div>

      {/* Amenities */}
      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-600 max-w-sm">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input 
              type="checkbox" 
              id={`amenity-${index}`} 
              checked={inputs.amenities[amenity]} 
              onChange={() => handleAmenitiesChange(amenity)} 
            />
            <label htmlFor={`amenity-${index}`} className="text-sm">{amenity}</label>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="bg-primary text-white px-8 py-2 rounded mt-8 hover:bg-opacity-80"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
