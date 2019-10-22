import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscritService {

  constructor(private http: HttpClient
  ) { }
  url1='http://localhost:9090/client/add';

  saveinscrit(client){
    return this.http.post(this.url1,client);
  }
}
