import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepenseService } from "../service/depense/depense.service";
import { Depense } from "../shared/models/depense.model";



@Component
({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls:['./gestion.component.css']
})

export class GestionComponent implements OnInit{

public depenses : Depense[] = [];


gestionForm : FormGroup;
  constructor(private depensesService : DepenseService,private fb:FormBuilder ){
    this.gestionForm = this.fb.group({
      nom:['',Validators.required],
      valeur:['',Validators.required],
      commentaire:''

    });
  }

  ngOnInit(){
    this.loadProduits();
  }

  loadProduits(){
    this.depensesService.getDepenses().subscribe(
      data => {
       this.depenses=data;},
      error => { console.log('An error was occured.')},
      () => { console.log('loading produits was done.')}
    );
  }
}


