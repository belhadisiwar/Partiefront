import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from'./authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexionclient',
  templateUrl: './connexionclient.component.html',
  styleUrls: ['./connexionclient.component.css']
})
export class ConnexionclientComponent implements OnInit {
  clients: Array<any>;
  
  constructor( private AuthenticationService : AuthenticationService, router:Router) { }

  ngOnInit() {
    this.AuthenticationService.getAll().subscribe(data=>{this.clients=data});
  }
}
