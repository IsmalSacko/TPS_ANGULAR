import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  @Input()  nomEtu = "Paul"
  @Input() prenomEtu = "Martin"
  @Input() statut = 'present'
  @Input() commentaire = "JE suis absent"
  present = "present"
  absent = "absent"
  derniereModif = ''
  nbStatut = 0


 

  retPrenomEtu(): string {
    return this.prenomEtu
  }
  retNomEtu(): string {
    return this.nomEtu
  }

  presentStatut() {
    this.statut = "present"
    this.derniereModif = new Date().toString()
    this.nbStatut++
  }
  
  asbsentStatut() {
    this.statut = "absent"
    this.derniereModif = new Date().toString()
    this.nbStatut++
  }
  

}



