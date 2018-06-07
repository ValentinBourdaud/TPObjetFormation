import { Formateur } from "./formateur";
import { Stagiaire } from "./Stagiaire";


export class Formation{
    _nom : string;
    _dateDebut : string;
    _dateFin : string;
    _listeStagiaires : Array<Stagiaire>;
    _listeFormateur : Array<Formateur>;

    constructor(nom : string, dateDebut : string, dateFin : string, listeStagiaires : Array<Stagiaire>,
    listeFormateur : Array<Formateur>){
        this._nom = nom;
        this._dateDebut = dateDebut;
        this._dateFin = dateFin;
        this._listeStagiaires = listeStagiaires;
        this._listeFormateur = listeFormateur;

    }
}