import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ComentarioService } from '../shared/comentario/comentario.service';
@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrls: ['./comentario-add.component.css']
})
export class ComentarioAddComponent implements OnInit {
  comentario: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private comentarioService: ComentarioService,
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.comentarioService.get(id).subscribe((comentario: any) => {
          if (comentario) {
            this.comentario = comentario;
            this.comentario.href = comentario._links.self.href;

          } else {
            console.log(`Comentario with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/idea-show']);
  }

  save(form: NgForm) {
    this.comentarioService.save(form).subscribe(result => {
      console.log(form);
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.comentarioService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }



}
