export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '5098ea6855mshd80f4af30c01e6ep12e63ajsn9034ad5b7388',
        }
      };
      

export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}