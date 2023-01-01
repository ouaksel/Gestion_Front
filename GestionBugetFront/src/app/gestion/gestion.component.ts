import { Component, OnInit } from "@angular/core";
import { GestionMockService } from './../mock/gestion.mock.service';
import { Depense } from './../shared/depense';


@Component
({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls:['./gestion.component.css']
})

export class GestionComponent implements OnInit{

depenses ?: Depense[];
  constructor(private depensesService : GestionMockService ){

  }

  ngOnInit(){
    this.depenses = this.depensesService.getDepenses();
    console.log( this.depenses)
  }
}
