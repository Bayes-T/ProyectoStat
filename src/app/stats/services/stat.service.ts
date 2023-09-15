import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stat } from '../interfaces/stats.interfaces';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getStats():Observable<Stat[]>{
    return this.http.get<Stat[]>(`${this.baseURL}/statisticians`)
  }

  getStat(id:string):Observable<Stat | undefined> {
    return this.http.get<Stat | undefined> (`${this.baseURL}/statisticians/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  onEdit(stat: Stat):Observable<Stat>{
    return this.http.patch<Stat> (`${this.baseURL}/statisticians/${stat.id}`, stat)
  }

  onNewStat(stat:Stat):Observable<Stat>{
    return this.http.post<Stat>(`${this.baseURL}/statisticians`, stat)
    //al enviar el [""], lo envia como "[""]", COMO EVITO ESTO???
  }

  onDelete(id:string):Observable<Stat>{
    return this.http.delete<Stat>(`${this.baseURL}/statisticians/${id}`)
  }
}
