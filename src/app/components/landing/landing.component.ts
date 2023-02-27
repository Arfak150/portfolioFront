import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona()
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
        {this.persona = data}
      )
  }
}