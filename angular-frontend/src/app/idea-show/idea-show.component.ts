import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../shared/idea/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-idea-show',
  templateUrl: './idea-show.component.html',
  styleUrls: ['./idea-show.component.css']
})
export class IdeaShowComponent implements OnInit {

  idIdea : string;
  subs: Subscription;
  idea: any;


  constructor(private ideaService: IdeaService,
  private route: ActivatedRoute,
  ){}


  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {this.idIdea=params['id'];});
    this.ideaService.get(this.idIdea).subscribe(data=>{this.idea = data;});
  }

}
