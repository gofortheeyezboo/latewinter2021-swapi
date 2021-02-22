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
            ProxyState.prev = res.data.prev
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.next).then(res => {
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
        }).catch(err => console.error(err))
    }


}

export const charactersService = new CharactersService();

