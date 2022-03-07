const API = 'https://rickandmortyapi.com/api/character/';

const getApiUrl = () => {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var page = urlParams.get('page');
  var status = urlParams.get('status');
  var gender = urlParams.get('gender');
  var species = urlParams.get('species');
  var id = urlParams.get('id')

  let query;
  if(page && status){
    query=`?page=${page}&status=${status}`
  } else if(page && gender){
    query=`?page=${page}&gender=${gender}`
  } else if(page && species){
    query=`?page=${page}&species=${species}`
  }else if(page){
    query=`?page=${page}`
  }else if(status){
    query=`?status=${status}`
  } else if(gender){
    query=`?gender=${gender}`
  } else if (species){
    query=`?species=${species}`
  } 
  return `${API}${query?query:""}`
}




export default getApiUrl;