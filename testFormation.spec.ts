import { expect } from "chai";
import { Boisson } from './Boisson';
import { Certification } from './Certification';
import { Connaissance } from './Connaissance';
import { Formateur } from './Formateur';
import { Formation } from './Formation';
import { Personne, Genre, Religion } from './Personne';
import { Stagiaire } from './Stagiaire';

describe('Personne : ', () => {
    it("Le prénom de la personne doit être Dimper", () => {
      let personne = new Personne("Olivier", "Dimper", Genre.homme, Religion.islam);
      expect(personne._firstName).to.equal("Olivier");
    });
  })

  describe('Formateur : ', () => {
    it("Le formateur doit être un homme ", () => {
      let formateur = new Formateur(new Array(), "Olivier", "Dimper", Genre.homme, Religion.islam);
      expect(formateur._genre).to.equal("homme");
    });
  })

  describe('Formation : ', () => {
    it("La date de fin de formation doit être après le mois de mars  ", () => {
      let formation = new Formation("JAVA", "12/02/2018", "18/05/2018", new Array(), new Array());
      expect(formation._dateFin).to.equal("18/05/2018");
    });
  })

  describe('Connaissance : ', () => {
    it("L'experience doit être de 7 ", () => {
      let connaissance = new Connaissance("Tourisme", 7);
      expect(connaissance._experience).to.equal(7);
    });
  })

  describe('Boisson : ', () => {
    it("la boisson doit être alcoolisée et bio", () => {
      let boisson = new Boisson("LA REGALADE", true, true);
      expect(boisson._alcool).to.equal(true);
      expect(boisson._bio).to.equal(true);

    });
  })

  describe('Certification : ', () => {
    it("La certification doit être sur le langage JAVA et datée de 2018", () => {
      let certif = new Certification("ORACLE JAVA 8", 2018);
      expect(certif._nom).to.equal("ORACLE JAVA 8");
      expect(certif._annee).to.equal(2018);

    });
  })

