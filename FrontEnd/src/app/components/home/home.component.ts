import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  expe: Experiencia[] = []

  experiencia: ExperienceComponent[] = []

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged= false;


  ngOnInit(): void {
    this.cargarExperiencia()
    if(this.tokenService.getToken()){
      this.isLogged = true
    } else {
      this.isLogged = false;
    }
  }
  
  cargarExperiencia() : void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }
}
