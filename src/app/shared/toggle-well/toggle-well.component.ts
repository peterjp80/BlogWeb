import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'blog-toggle-well',
    templateUrl: 'toggle-well.component.html'
})
export class ToggleWellComponent implements OnInit {
    @Input() linkText: string;
    hidden: boolean = true;

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.hidden = !this.hidden;
    }

    isHidden(): boolean {
        return this.hidden;
    }

}