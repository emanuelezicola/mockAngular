import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UtenteDto} from "./UtenteDto";
import {DbMockService} from "./db-mock.service";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient, private dbMock: DbMockService) { }


  public getAllUtenti(): Observable<UtenteDto[]> {

    //Mock senza BE
    let utentiList = this.dbMock.utentiDB;


    return of(utentiList);

    //Mock Con BE
    //return this.http.get<UtenteDto[]>('http://localhost:8080/utenti')
  }



  public registrazione(utenteDto: UtenteDto): Observable<UtenteDto> {

    utenteDto.id = this.dbMock.utentiDB.length === 0 ? 1 : this.dbMock.utentiDB[this.dbMock.utentiDB.length - 1].id + 1;

    this.dbMock.utentiDB.push(utenteDto);
    return of(utenteDto);
  }


}
