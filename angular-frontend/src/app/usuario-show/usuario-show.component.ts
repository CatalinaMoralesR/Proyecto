import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../shared/usuario/usuario.service";

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent implements OnInit {
  usuarios: Array<any>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(data => {
      this.usuarios = data;
    });
  }
}
