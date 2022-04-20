import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  _url ='https://api.unsplash.com/photos/?client_id=jd49bbC3_peFAz7XA3q0OpcuTPHjUZzmdLOhp1kKSZg';

  constructor(
    private http: HttpClient  
  ) { 
    console.log("Servicio activo")
  }
  getPersonas(){
    let headers = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get(this._url, {
      headers: headers
    }) 
  }
}
