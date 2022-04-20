import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  public imgs : Array<any> = []

  constructor(
    private personaService: PersonasService
  ){
    this.personaService.getPersonas().subscribe((resp:any)=> {
      console.log(resp)
      this.imgs = resp
    })
  }
}
