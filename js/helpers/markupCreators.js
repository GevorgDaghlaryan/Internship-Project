const markupCreators = {
    playCardForAdmin: (item) => {
        return`
           <div  class ="play-card" data-id="${item.id}">
           <button class='play-card_delete-btn' data-id ='${item.id}'>X</button>
              <div class = 'play-card_image' >
                <img src = '${item.img}'>
              </div>
              <div class = 'play-card_container'>
                <h4 class = 'play-card_name'><b>${item.name}</b></h4> 
                <p class = 'play-card_date'>${new Date(item.date).toLocaleTimeString()}</p>
                <p class = 'play-card_price'> ${item.price}</p>

              </div>
           </div> 
        `;
    },
    playCardForUser: (item) => {
      return`
      <div  class ="play-card" data-id="${item.id}">
        <div class = 'play-card_image' >
          <img src = '${item.img}'>
        </div>
        <div class = 'play-card_container'>
          <h4 class = 'play-card_name'><b>${item.name}</b></h4> 
          <p class = 'play-card_date'>${new Date(item.date).toLocaleTimeString()}</p>
          <p class = 'play-card_price'> ${item.price}</p>
          <button data-id='${item.id}'>Book</button>
        </div>
      </div> 
  `;
      
    }
}
export default markupCreators;