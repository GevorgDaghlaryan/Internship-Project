//services
import  Play from './services/Play.js';
//helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js';
import markupCreators from  './helpers/markupCreators.js';

//elements 
const $userPlayListContainer = document.querySelector('.user_play-list-container');


//Data
const playData = {};

function renderData(data){
  setHtmlFromArray($userPlayListContainer, data, markupCreators.playCardForUser);
}

async function handleGetPlays(){
  const data = await Play.getPlays();
 
  renderData(data);
}

handleGetPlays();