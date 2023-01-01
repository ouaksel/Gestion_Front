import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
gestionForm : FormGroup;
  constructor(private depensesService : GestionMockService,private fb:FormBuilder ){
    this.gestionForm = this.fb.group({
      nom:['',Validators.required],
      valeur:['',Validators.required],
      commentaire:''

    });
  }

  ngOnInit(){
    this.depenses = this.depensesService.getDepenses();
    console.log( this.depenses)
  }
}
