import { Personne, Genre, Religion } from "./personne";
import { Certification } from "./Certification";

export class Stagiaire extends Personne{
     private _listeCertif : Array<Certification>

    constructor(listeCertif:Array<Certification>, firstName : string, lastName : string, genre : Genre, religion : Religion ){
        super(firstName, lastName, genre, religion);
        this._listeCertif = listeCertif;
    }

}