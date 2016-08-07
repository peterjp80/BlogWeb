import { Component, OnInit, Input } from '@angular/core';

import { NoteType } from './note-type';

@Component({
  moduleId: module.id,
  selector: 'blog-note',
  templateUrl: 'note.component.html'
})

export class NoteComponent implements OnInit {
  @Input() title: string;
  @Input() noteType: NoteType;
  cssClass: string;

  constructor() { }

  ngOnInit() { 
    switch (this.noteType) {
      case (NoteType.Danger):
        this.cssClass = "alert alert-danger";
        break;
      case (NoteType.Success):
        this.cssClass = "alert alert-success";
        break;
      case (NoteType.Info):
        this.cssClass = "alert alert-info";
        break;
      default:
        this.cssClass = "alert alert-warning";
        break;
    }
  }

}