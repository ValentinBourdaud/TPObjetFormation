export class Connaissance{
    _nom : string;
    _experience : number;
    constructor( nom : string, experience : number){
        this._nom = nom;
        this._experience = experience;
    }

    get experience():number {
        return this._experience;
    }
}