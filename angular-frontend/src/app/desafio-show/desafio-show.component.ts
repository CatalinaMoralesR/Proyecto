import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../shared/desafio/desafio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desafio-show',
  templateUrl: './desafio-show.component.html',
  styleUrls: ['./desafio-show.component.css']
})
export class DesafioShowComponent implements OnInit {

  idDesafio : string;
  subs: Subscription;
  desafio: any;


  constructor(private desafioService: DesafioService,
              private route: ActivatedRoute,
  ){}


  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {this.idDesafio=params['id'];});
    this.desafioService.get(this.idDesafio).subscribe(data=>{this.desafio = data;});
  }

}
