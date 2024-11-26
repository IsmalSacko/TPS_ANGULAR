import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtudiantComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP1Angular version 18';
  titreSeance = 'Séance TP1 et TP2 Angular';
  estAuth = false
  statutAll="absent"
  commentaireSeance = ' '; // propriété commentaireSeance pou
  constructor(){
    setTimeout(() => {this.estAuth = true;}, 1000);
  }
  rendTousPresent(){
    console.log("Bonjour ca marche")
    this.statutAll="dormant"
  }
  
}
  

  
