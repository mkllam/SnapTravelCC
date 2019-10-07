const hotels = [{
    name: 'hello hotel',
    country: 'Mexico',
    amenities: ['Pool', 'Restaurant', 'Sauna', 'Gym', 'Wifi'],
  },
  {
    name: 'toronto hotel',
    country: 'Canada',
    amenities: ['Restaurant', 'Sauna', 'Hot Tub'],
  },
  {
    name: 'waterloo hotel',
    country: 'Canada',
    amenities: ['Spa'],
  },
  {
    name: 'kitchener hotel',
    country: 'Canada',
    amenities: ['Restaurant', 'Gym'],
  },
]

const amenityExistsInList = {
  pool: false,
  restaurant: false,
  wifi: false,
  pet: false,
  gym: false,
}

const country = "Canada"

const getExistingAmenities = (hotelLib, amenityExists, nation = "") => {
  // Create a clone of amenityExists
  let existingAmenities= JSON.parse(JSON.stringify(amenityExists));
  // filter for hotel  
  for (let i = 0; i < hotelLib.length; i++) {
  	if(nation == hotelLib[i].country || nation == ""){
      hotelLib[i].amenities.forEach(function(amenity) {
        // Check if Key exists and is false
        if (existingAmenities[amenity.toLowerCase()] == false)
          existingAmenities[amenity.toLowerCase()] = true;
      });
    }
  }
  let output = JSON.stringify(existingAmenities);
  console.log(output);
}

const getAllAmenities = (hotelLib) => {
  // simple filter + concat 
  let amenities = [];
  for (let i = 0; i < hotelLib.length; i++) {
    amenities = amenities.concat(
      hotelLib[i].amenities.filter(amenity => !amenities.includes(amenity))
    );
  }
  console.log(amenities);
}

const calcHotelAmenities = (hotelLib) => {
  let amenitiesNum = [];
  for (let i = 0; i < hotelLib.length; i++)
    amenitiesNum.push(hotelLib[i].amenities.length);

  console.log(amenitiesNum);
}

getExistingAmenities(hotels, amenityExistsInList)
getExistingAmenities(hotels, amenityExistsInList, country)
getAllAmenities(hotels)
calcHotelAmenities(hotels)
