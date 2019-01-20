import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ComentarioService {

  public API = '//localhost:1313';
  public COMENTARIO_API = this.API + '/comentarios';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/comentarios/getcomentarios');
  }

  get(id: string) {
    return this.http.get(this.COMENTARIO_API + '/' + id);
  }

  save(comentario: any): Observable<any> {
    let result: Observable<Object>;
    if (comentario['href']) {
      result = this.http.put(comentario.href, comentario);
    } else {
      result = this.http.post(this.COMENTARIO_API + '/create', comentario);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
