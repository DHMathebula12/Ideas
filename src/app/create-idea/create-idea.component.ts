import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {
  heading: string;
  body: string;

  constructor(private ideasService: IdeasService) {}

  ngOnInit() {}

  createIdea() {
    const idea = {
      heading: this.heading,
      body: this.body
    };

    this.ideasService.createIdea(idea).subscribe(response => {
      console.log(response);
    });
  }
}
