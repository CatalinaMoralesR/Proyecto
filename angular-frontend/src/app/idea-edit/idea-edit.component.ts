import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IdeaService } from '../shared/idea/idea.service';
@Component({
  selector: 'app-idea-edit',
  templateUrl: './idea-edit.component.html',
  styleUrls: ['./idea-edit.component.css']
})
export class IdeaEditComponent implements OnInit {
  idea: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ideaService: IdeaService,
    ) {
}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.ideaService.get(id).subscribe((idea: any) => {
        if (idea) {
          this.idea = idea;
          this.idea.href = idea._links.self.href;
         
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

save(form: NgForm) {
  this.ideaService.save(form).subscribe(result => {
    this.gotoList();
  }, error => console.error(error));
}

remove(href) {
  this.ideaService.remove(href).subscribe(result => {
    this.gotoList();
  }, error => console.error(error));
}



}
