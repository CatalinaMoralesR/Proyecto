import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../shared/desafio/desafio.service';
import {ComentarioService} from "../shared/comentario/comentario.service";

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  comentarios: Array<any>;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit() {
    this.comentarioService.getAll().subscribe(data => {
      this.comentarios = data;
    });
  }
}
