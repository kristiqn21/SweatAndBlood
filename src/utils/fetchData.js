export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'b31e1d5662mshdfd2409ee1a822ap1c87d0jsn4baeacdd31b9',
        }
      };
      
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b31e1d5662mshdfd2409ee1a822ap1c87d0jsn4baeacdd31b9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}