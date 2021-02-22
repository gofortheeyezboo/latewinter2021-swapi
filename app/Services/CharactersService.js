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
            console.log(res.data)
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
            console.log(ProxyState.characters)
        console.log("this does not run first")
        }).catch(err => console.error(err))
        console.log("this runs first")
    }

    next() {
        api.get(ProxyState.next).then(res => {
            console.log(res.data)
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
            console.log(ProxyState.characters)
        }).catch(err => console.error(err))
    }


}

export const charactersService = new CharactersService();

