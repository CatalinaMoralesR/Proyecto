import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IdeaService} from '../shared/idea/idea.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nombre : string;
  subs: Subscription;
  idea: any;
  id: String;

  constructor(private ideaService: IdeaService,
              private route: ActivatedRoute,
  ){}


  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {this.nombre=params['nombre'];});
  }


  buscarIdea(form: NgForm){
    console.log(this.nombre);

    this.ideaService.getIdeaByNombre(this.nombre).subscribe(data=>{this.idea = data;});
  }
}
