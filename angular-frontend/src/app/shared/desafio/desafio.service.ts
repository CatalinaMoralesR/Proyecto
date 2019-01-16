import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DesafioService {

  public API = '//localhost:1313';
  public DESAFIO_API = this.API + '/desafios';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/desafios/getdesafios');
  }

  get(id: string) {
    return this.http.get(this.DESAFIO_API + '/' + id);
  }

  save(desafio: any): Observable<any> {
    let result: Observable<Object>;
    if (desafio['href']) {
      result = this.http.put(desafio.href, desafio);
    } else {
      result = this.http.post(this.DESAFIO_API + '/create', desafio);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
