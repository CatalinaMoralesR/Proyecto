import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DesafioService } from '../shared/desafio/desafio.service';
@Component({
  selector: 'app-desafio-edit',
  templateUrl: './desafio-edit.component.html',
  styleUrls: ['./desafio-edit.component.css']
})
export class DesafioEditComponent implements OnInit {
  desafio: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private desafioService: DesafioService,
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.desafioService.get(id).subscribe((desafio: any) => {
          if (desafio) {
            this.desafio = desafio;
            this.desafio.href = desafio._links.self.href;

          } else {
            console.log(`Desafio with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/desafio-list']);
  }

  save(form: NgForm) {
    this.desafioService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.desafioService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }



}

