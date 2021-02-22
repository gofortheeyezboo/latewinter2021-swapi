import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Character from "../Models/Character.js";

class CharactersService {
  
    constructor() {
        this.getCharacters()
    }

    // api.get('people').then(function (res) {
        
    // })
    getCharacters() {
        api.get('people').then(res => {
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
            console.log(res.data.previous);
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.next).then(res => {
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        }).catch(err => console.error(err))
    }

    prev(){
        api.get(ProxyState.prev).then(res => {
            
            if(ProxyState.prev != null){

                ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            }else{
                alert('There is no Previous page')
                return
            }
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        }).catch(err => console.error(err))      
    }

}

export const charactersService = new CharactersService();

