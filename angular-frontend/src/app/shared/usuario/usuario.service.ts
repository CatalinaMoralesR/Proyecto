import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  public API = '//localhost:1313';
  public USUARIO_API = this.API + '/usuario';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/usuario/getUsuario');
  }

  get(id: string) {
    return this.http.get(this.USUARIO_API + '/' + id);
  }

  save(usuario: any): Observable<any> {
    let result: Observable<Object>;
    if (usuario['href']) {
      result = this.http.put(usuario.href, usuario);
    } else {
      result = this.http.post(this.USUARIO_API + '/create', usuario);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
