import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class IdeaService {

  public API = '//localhost:1313';
  public IDEA_API = this.API + '/ideas';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/ideas/getideas');
  }

  get(id: string) {
    return this.http.get(this.IDEA_API + '/' + id);
  }

  save(idea: any): Observable<any> {
    let result: Observable<Object>;
    if (idea['href']) {
      result = this.http.put(idea.href, idea);
    } else {
      result = this.http.post(this.IDEA_API + '/create', idea);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  addComentario(id: string, comentario:any) {
    console.log(comentario);
    return this.http.post(this.IDEA_API + '/' + id + '/comentario/', comentario);
  }
  addVotoIdea(id: string) {
    return this.http.post(this.IDEA_API + '/'+ id + '/voto');
  }

  search(nombre: String){
    return this.http.get(this.IDEA_API + '/ideas/byname/{name}');
  }
}
