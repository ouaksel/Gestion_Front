import { Injectable } from '@angular/core';
import { Depense } from './../shared/depense';

@Injectable()
export class GestionMockService{

  private DEPENSES : Depense[] = [];
  constructor(){
    let d1 : Depense = new Depense("kebab",34.87,"bon")
    let d2 : Depense = new Depense("livre",24.87,"etude")
    let d3 : Depense = new Depense("salle",84.87,"sport")
    this.DEPENSES.push(d1);
    this.DEPENSES.push(d2);
    this.DEPENSES.push(d3);
  }

  public getDepenses() : Depense[]{
    return this.DEPENSES;
  }
}
