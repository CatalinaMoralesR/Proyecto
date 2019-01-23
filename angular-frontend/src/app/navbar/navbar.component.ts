import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IdeaService} from '../shared/idea/idea.service';
import {ActivatedRoute, Router} from '@angular/router';
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
              private router: Router,

  ){}


  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {this.nombre=params['nombre'];});
  }
  gotoList() {
    window.location.reload();
    this.router.navigate(['/idea-show']);
  }



  buscarIdea(form: NgForm) {
    this.ideaService.getIdeaByNombre(this.nombre).subscribe(result => {
      console.log(this.id);
      this.gotoList();
    }, error => console.error(error));
  }

}
