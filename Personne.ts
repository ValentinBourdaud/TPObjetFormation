import { Boisson } from "./boisson"

export enum Genre {
    homme="homme",
    femme="femme"
};

export enum Religion {
    buddhism,
    judaism,
    islam,
    catholicism,
    atheist
};

export class Personne {
    _firstName: string;
    _lastName: string;
    _genre: Genre;
    private _religion: Religion | undefined;
    constructor(firstName: string, lastName: string, genre:Genre, religion?:Religion) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._genre = genre;
        this._religion = religion;
    }

    public drink (boisson:Boisson) {
        if (boisson.alcool && boisson.bio ){
            return boisson.nom + ", cette boisson est bonne";
        }
        else if (!boisson.alcool && boisson.bio ){
            return boisson.nom + ", cette boisson est bonne mais non alcoolisée";
        }
        else if (boisson.alcool && !boisson.bio ){
            return boisson.nom + ", cette boisson est alcoolisée mais pas bio";
        }
        else if (!boisson.alcool && !boisson.bio ){
            return boisson.nom + ", cette boisson est très mauvaise";
        }
    }

    toString() {
        return console.log(this._firstName + this._lastName);
    }
}