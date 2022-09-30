//services
import  Play from './services/Play.js';
//helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js';
import markupCreators from  './helpers/markupCreators.js';

//Elements 

const $adminForm =  document.querySelector('.admin_form');
const $adminFormInputs =  $adminForm.querySelectorAll('.admin_form-input');
const $adminPlayListContainer = document.querySelector('.admin_play-list-container');
const $adminFormUpload = document.querySelector('.admin_form-upload');
const $adminFormUploadImage = document.querySelector('.admin_form-uploaded-image');

console.log($adminFormUpload);

//EventListener
$adminForm.addEventListener('submit', handleFormSubmit);

$adminFormInputs.forEach(($adminFormInput)=>{
  $adminFormInput.addEventListener('input', handleInput)
});

$adminFormUpload.addEventListener('change', handleUpload);

function cardProcess() {
  const $cards = document.querySelectorAll('.play-card_delete-btn');
  $cards.forEach(($card)=>{
    $card.addEventListener('click', async ()=>{
      const data = await Play.deletePlay($card.dataset.id);
      renderData(data);
    })
  })
}


//hendle events
async function handleFormSubmit(e){
  e.preventDefault();
  const data = await Play.createPlay(playData);
  renderData(data);
  e.target.reset();
  console.log(playData);
  $adminFormUploadImage.src = '';

}
function handleInput(e){
  playData[e.target.name] =  e.target.value;
 console.log("in");
}

 function handleUpload(e){
  console.log("innnnn");
  const {files} = e.target;
  console.log(files);
  if(files[0]){
    const fileReader = new FileReader()
    fileReader.addEventListener('load', (e)=>{
      $adminFormUploadImage.src = e.target.result;
      playData.img = e.target.result;

      console.log(e.target.result);

    })
    fileReader.readAsDataURL(files[0])


  }
 }; 
  
//Data
const playData = {};

function renderData(data){
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCardForAdmin)
}

async function handleGetPlays(){
  const data = await Play.getPlays();
 
  renderData(data);
  cardProcess()
}

handleGetPlays();
