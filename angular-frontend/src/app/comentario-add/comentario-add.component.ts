import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ComentarioService } from '../shared/comentario/comentario.service';
import { IdeaService } from '../shared/idea/idea.service';

@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrls: ['./comentario-add.component.css']
})
export class ComentarioAddComponent implements OnInit {
  comentario: any = {};
  id: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private comentarioService: ComentarioService,
              private ideaService: IdeaService,
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/idea-show']);
  }

  save(form: NgForm) {
    this.ideaService.addComentario(this.id, form).subscribe(result => {
      console.log(this.id);
      console.log(form);
      this.gotoList();
    }, error => console.error(error));
  }





}
