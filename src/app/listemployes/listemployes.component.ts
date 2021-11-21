import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {

  lesEmployes:Employe[]= [];
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.lesEmployes = this.employeService.getEmployes();
  }

}
