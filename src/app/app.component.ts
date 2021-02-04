import { Component } from '@angular/core';
import {UtenteService} from "./utente.service";
import {UtenteDto} from "./UtenteDto";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mockAngular';

  utenteDtoList: UtenteDto[] = [];

  showInsert: boolean = false;

  insertForm = this.formBuilder.group({
    id: 0,
    nome: '',
    cognome: ''
  });


  constructor(private utenteService: UtenteService, private formBuilder: FormBuilder) {
    this.utenteService.getAllUtenti().subscribe(
      data => {

        data.forEach(utente => {
          if (utente.id && utente.id === 3) {
            utente.nome = 'Emanuele non io!';
            utente.cognome = "Stupido";
          }
        });

        this.utenteDtoList = data;
      }, err => {
        alert("ERRORE, GIUDEO " + err);
      }
    )
  }

  public registraUtente(): void {
    this.utenteService.registrazione(this.insertForm.value).subscribe(
      value => {

        this.utenteService.getAllUtenti();
      }, error => alert("ERRORE, GIUDEO " + error ));
  }




}
