import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  emp:Employe=new Employe(125,"Sinda Hab", "PDG","IT");

  fonctions:string[]=["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private employeService:EmployeService) { }
  ngOnInit(): void {
  }

  message:string="";
  onAjouter(f:NgForm){
    console.log(f.value);
   
    // Si on n'utilise pas le 2 Way-binding:
    // let employe: Employe = new Employe(f.value.mat, f.value.nom, f.value.fonction, f.value.dep);
    // if(this.employeService.addNewEmploye(employe)) 
    

    // Avec le 2 Way-Binding
    if(this.employeService.addNewEmploye(this.emp)) 
        this.message = "Employé ajouté" ;
    else
        this.message = "L'employé existe déjà";
  }

  onVider(frm:NgForm){
        frm.resetForm({fonction:'Secrétaire', dep:'IT'})
  }

}
