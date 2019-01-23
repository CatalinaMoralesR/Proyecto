import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-idea-show',
  templateUrl: './idea-show.component.html',
  styleUrls: ['./idea-show.component.css']
})
export class IdeaShowComponent implements OnInit {

  idIdea : string;
  subs: Subscription;
  idea: any;
  id: string;
  subs2: Subscription;

  constructor(private ideaService: IdeaService,
  private route: ActivatedRoute,
              private router: Router,

  ){}


  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {this.idIdea=params['id'];});
    this.ideaService.get(this.idIdea).subscribe(data=>{this.idea = data;});
    this.subs2 = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  gotoList() {
    window.location.reload();
    this.router.navigate(['/idea-show']);
  }

  addVoto(form: NgForm) {
    this.ideaService.addVotoIdea(this.id).subscribe(result => {
      console.log(this.id);
      this.gotoList();
    }, error => console.error(error));
  }

}
