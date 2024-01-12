import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MinoturoPartesComponent } from './minoturo-partes/minoturo-partes.component';
import { CabezaMComponent } from './minoturo-partes/cabeza-m/cabeza-m.component';
import { CerebroMComponent } from './minoturo-partes/cabeza-m/cerebro-m/cerebro-m.component';
import { PechoMComponent } from './minoturo-partes/pecho-m/pecho-m.component';
import { EstomagoMComponent } from './minoturo-partes/pecho-m/estomago-m/estomago-m.component';
import { AnatomiaMComponent } from './minoturo-partes/anatomia-m/anatomia-m.component';
import { PiernasMComponent } from './minoturo-partes/piernas-m/piernas-m.component';
import { PiernaAnMComponent } from './minoturo-partes/piernas-m/pierna-an-m/pierna-an-m.component';
import { BrazosMComponent } from './minoturo-partes/brazos-m/brazos-m.component';
import { BrazosAnMComponent } from './minoturo-partes/brazos-m/brazos-an-m/brazos-an-m.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MinoturoPartesComponent,CabezaMComponent,CerebroMComponent,PechoMComponent,EstomagoMComponent,AnatomiaMComponent,PiernasMComponent,PiernaAnMComponent,BrazosMComponent,BrazosAnMComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Minotauro-partes';
}
