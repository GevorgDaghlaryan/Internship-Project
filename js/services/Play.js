import Api from './Api.js';

import request from '../utils/request.js';

class Play extends Api {
    static async createPlay(data) {
        try {

            const response = await request('POST','plays.json', data);
            return await this.getPlays();
        }
        catch (e) {
             super.catchError(e);

        }
        
    }
    
    static async getPlays(){
        try{
            const response = await request('GET','plays.json');
            return super.objectToArray(response);

        }
        catch(e){
            super.catchError(e);
        }

    }
    static async deletePlay(id) {
    
        try{
            const response = await request('DELETE', `plays/${id}.json`);
            return await this.getPlays();

           

        }
        catch(e){
            super.catchError(e);
        }
    
      }

}
export default Play;