import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IdeaService } from '../shared/idea/idea.service';

@Component({
  selector: 'app-idea-editreal',
  templateUrl: './idea-editreal.component.html',
  styleUrls: ['./idea-editreal.component.css']
})
export class IdeaEditrealComponent implements OnInit {
  idea: any ;
  idOf: string;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private ideaService: IdeaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.idOf = params['id'];
      if (id) {
        this.ideaService.get(id).subscribe((idea: any) => {
          if (idea) {
            this.idea = idea;
            console.log(idea);
            this.idea.href = window.location.href;
            console.log(this.idea);
          } else {
            console.log(`Idea with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/idea-list']);
  }

  edit(form: NgForm){
    console.log(this.idOf);
    console.log(form);

    this.ideaService.editar(this.idOf, form).subscribe(result => {
      this.gotoList();
    }, error=> console.error(error));
  }

  remove(href) {
    this.ideaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }




}
