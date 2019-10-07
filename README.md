# SnapTravelCC
Code Challenge for Snap Travel interview

/* Amazing Amenities
The goal is to output an object showing which important amenities are available in a given list of hotels
We want to look for amenities that are existing keys in a given object (refer to amenityExistsInList below).
The values corresponding to each key are boolean values that indicate whether the amenity exists in the list.
We also only want to check for hotels in the given country.
IMPORTANT: If no country is provided, look though all hotels

Create a function, getExistingAmenities, that will output an object of the same structure as amenityExistsInList but with
existing amenities set to true

Create another function, getAllAmenities, that will return a de-duped(no duplicates) array of all amenities in a given hotel list

Create another function, calcHotelAmenities, that returns an array with the number of amenities each hotel has in a given hotel list

NOTE: Bonus points for making the getExistingAmenities a pure function (If you dont know, look it up)

Example:
const hotels = [
  {
    name: 'hello hotel', 
    country: 'Mexico'
    amenities: ['Pool', 'Restaurant', 'Sauna', 'Gym', 'Wifi'],
  },
  {
    name: 'toronto hotel', 
    country: 'Canada',
    amenities: [Restaurant', 'Sauna', 'Hot Tub'],
  },
  {
    name: 'waterloo hotel', 
    country: 'Canada',
    amenities: ['Spa'],
  },
  {
    name: 'kitchener hotel', 
    country: 'Canada',
    amenities: [Restaurant', 'Gym'],
  },
]

const amenityExistsInList = {
  pool: false,
  restaurant: false,
  wifi: false,
  pet: false,
  gym: false,
}

const country = 'Canada'

const getExistingAmenities(***args here***) => {
  *** function body ***
}

getExistingAmenities(hotels, amenityExistsInList, country)
OUTPUT: 
{
  pool: true,
  restaurant: true,
  wifi: true,
  pet: false,
  gym: true,
}

getExistingAmenities(hotels, amenityExistsInList, 'mexico')
OUTPUT: 
{
  pool: false,
  restaurant: true,
  wifi: true,
  pet: false,
  gym: true,
}

getAllAmenities(hotels)
OUTPUT: ['Pool', 'Spa', 'Restaurant', 'Sauna', 'Gym', 'Wifi', 'Hot Tub']

calcHotelAmenities(hotels)
OUTPUT: [5, 3, 1, 2]
*/



