import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{DemandeService } from './demande.service';
@Component({
  selector: 'app-dashclient',
  templateUrl: './dashclient.component.html',
  styleUrls: ['./dashclient.component.css']
})
export class DashclientComponent implements OnInit {
 
  messageForm:FormGroup;
  constructor(private service : DemandeService) { }

  
  ngOnInit() {
   
 
  }

}
