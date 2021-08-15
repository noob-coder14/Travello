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
                  'x-rapidapi-key': 'a0ce4e0066msh7a079914ee3902bp1a8522jsn725893a898c8',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}