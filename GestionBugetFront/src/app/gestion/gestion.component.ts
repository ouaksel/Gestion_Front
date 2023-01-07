import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Depense } from 'src/app/shared/models/depense';
import { DepenseService } from "../service/depense/depense.service";



@Component
({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls:['./gestion.component.css']
})

export class GestionComponent implements OnInit{

public depenses : Depense[] = [];

 d ?: Depense;

 public operation : String = 'add';

 selectedDepense!: Depense;


gestionForm !: FormGroup;
  constructor(private depensesService : DepenseService,private fb:FormBuilder ){
    this.createForm();
  }

  ngOnInit(){
    this.initDepense();
    this.loadDepenses();
  }

  createForm(){
    this.gestionForm = this.fb.group({
      nom:['',Validators.required],
      valeur:['',Validators.required],
      commentaire:''

    });
  }

  loadDepenses(){
    this.depensesService.getDepenses().subscribe(
      data => {
       this.depenses=data;},
      error => { console.log('An error was occured.')},
      () => { console.log('loading produits was done.')}
    );
  }


  addDepense(){
    const d = this.gestionForm.value;
    d.valeur_dpns=d.valeur;
    d.nom_dpns=d.nom;
    d.commentaire_dpns=d.commentaire;
    d.categorie_dpns=d.commentaire;
    console.log(d.nom);
    this.depensesService.adddepense(d).subscribe(
      res=>{
        this.initDepense();
        console.log("load");
        this.loadDepenses();
      }
    );




  }
  updateDepense(){

    this.depensesService.updatedepense(this.selectedDepense)
    .subscribe(
      res=>{
        this.initDepense();
        this.loadDepenses();
      }
    );
  }

  initDepense(){
    this.selectedDepense = new Depense();
    this.createForm();
  }


  deleteDepense(){
    this.depensesService.deletedepense(this.selectedDepense.id_dpns).
    subscribe(
      res =>{
        this.selectedDepense = new Depense();
        this.loadDepenses();
      }
    )
  }
}




