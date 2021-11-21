import { Injectable } from '@angular/core';
import {Employe} from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

 private lesEmployes:Employe[]= [];

 public getEmployes(){
      return this.lesEmployes;
 }

  addNewEmploye(emp: Employe): boolean {
    console.log(emp);
    
    let e: Employe = Object.assign({}, emp);
    if (!this.existeMatricule(e.matricule)) {    
      this.lesEmployes.push(e);
      return true;
    }
    return false;
  }

 public existeMatricule(mat:number):boolean{
  return this.lesEmployes.find(e=>e.matricule==mat) != undefined;
 }

  constructor() { }
}
