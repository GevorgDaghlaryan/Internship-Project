import store from './utils/store.js';

if(!store.getItem('acces_token')){
location.href = '/login.html';
}
