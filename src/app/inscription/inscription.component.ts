import { Component, OnInit } from '@angular/core';
import{InscritService } from './inscrit.service';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscritsaveform: FormGroup
  constructor( private service : InscritService) { }
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
    this.inscritsaveform=new FormGroup({  
      username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
      Adresse:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
      tel:new FormControl('' , [Validators.required , Validators.minLength(8) ] ),  
      password:new FormControl('' , [Validators.required , Validators.minLength(8) ] ),  
    }); 
  }  
  
  saveinscrit(){  
    this.service.saveinscrit(this.inscritsaveform.value).subscribe(reponse => {
      console.log(reponse);
    })
    this.submitted = true;  
  }  
}
