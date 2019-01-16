import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../shared/desafio/desafio.service';

@Component({
  selector: 'app-desafio-list',
  templateUrl: './desafio-list.component.html',
  styleUrls: ['./desafio-list.component.css']
})
export class DesafioListComponent implements OnInit {
  desafios: Array<any>;

  constructor(private desafioService: DesafioService) { }

  ngOnInit() {
    this.desafioService.getAll().subscribe(data => {
      this.desafios = data;
    });
  }
}
