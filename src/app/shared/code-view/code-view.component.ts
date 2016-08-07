import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'blog-code-view',
  templateUrl: 'code-view.component.html'
})

export class CodeViewComponent implements OnInit {
  @Input() language: string;

  constructor() { }

  ngOnInit() { }

}