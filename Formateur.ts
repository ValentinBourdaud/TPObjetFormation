import { Connaissance } from "./connaissance";
import { Personne, Genre, Religion } from "./personne";

export class Formateur extends Personne {
    private _connaissance : Array<Connaissance>;

    constructor(connaissance:Array<Connaissance>, firstName : string, lastName : string,  genre : Genre, religion : Religion) {
        super(firstName, lastName, genre, religion);
        this._connaissance = connaissance;
    }


     enseigner(){
    let resultat:Array<Connaissance> = new Array<Connaissance>();
    this._connaissance.forEach(connaissance => {
        if (connaissance.experience > 2){
             resultat.push(connaissance);
        }
    });
        return resultat;
    }
}


