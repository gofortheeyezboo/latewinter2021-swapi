export default class Character {
    constructor(data) {
        this.name = data.name
        this.mass = data.mass || "unknown"
        this.hairColor = data.hairColor || data.hair_color
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            ${this.name}
            mass: ${this.mass}
            hair color: ${this.hairColor}
        </div>
        `
    }
}
