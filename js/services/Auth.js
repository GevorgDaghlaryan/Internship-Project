//Service
import User from './User.js';
import {API_KEY} from '../config.js'
import request from '../utils/request.js';
import store from '../utils/store.js';

class Auth extends User {

    static  async signUp(data){
        try{
            const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                email: data.email,
                password: data.password,
            })
            const userData = {
                email: data.email,
                name: data.fullName,
                role: 'user',
            }
            
            const createdResponseData =  await super.createUser(responseData.localId, userData);
            store.setItem('acces_token', responseData.idToken);
            store.setItem('user', userData);
        }
        catch(e){
            super.catchError(data);
    }

    }

    static async signIn(data){

        try{
            const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                email: data.email,
                password: data.password,
            });
            if(responseData?.error ){
                throw responseData.error;
            }
        
            const userData = await super.getUser(responseData.localId);
            console.log(responseData);

            

            store.setItem('acces_token', responseData.idToken);
            store.setItem('user', userData);
            location.href = '/index.html';
          
        }

        catch(e){
            super.catchError(data);
    }
    }
}

 export default Auth;