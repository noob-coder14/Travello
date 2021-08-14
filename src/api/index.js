import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// const options = 
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });
export const getPlacesData = async (sw,ne) => {
    try{
        const { data: {data} } = await axios.get(URL,
            {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                //   restaurant_tagcategory_standalone: '10591',
                //   restaurant_tagcategory: '10591',
                //   limit: '30',
                //   currency: 'USD',
                //   open_now: 'false',
                //   lunit: 'km',
                //   lang: 'en_US'
                },
                headers: {
                  'x-rapidapi-key': 'd98ab5e48bmshe928a47fd86d459p11c36fjsn565d50d88dfe',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}