
export class Boisson {
    _nom: string;
    _alcool: boolean;
    _bio: boolean;
    constructor(nom: string, alcool: boolean, bio: boolean, ) {
        this._nom = nom;
        this._alcool = alcool;
        this._bio = bio;
    }

    get nom(): string {
        return this._nom;
    }

    get alcool(): boolean {
        return this._alcool;
    }

    get bio(): boolean {
        return this._bio;
    }

}