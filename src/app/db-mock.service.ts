import { Injectable } from '@angular/core';
import {UtenteDto} from "./UtenteDto";

@Injectable({
  providedIn: 'root'
})
export class DbMockService {


  utentiDB: UtenteDto[] = [];

  constructor() { }
}
