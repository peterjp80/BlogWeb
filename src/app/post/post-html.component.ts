import { Component, Input, OnInit, ComponentResolver, ViewChild, ViewContainerRef } from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";

import { ToggleWellComponent, CodeViewComponent, NoteComponent, NoteType } from '../shared';

function compileToComponent(template: string) {
    @Component({
        selector: 'blog-dyn-comp',
        template: template ? template : '',
        directives: [ToggleWellComponent, CodeViewComponent, NoteComponent]
    })
    class DynamicComponent {
        NoteType = NoteType;
    };
    return DynamicComponent;
}

@Component({
    moduleId: module.id,
    selector: 'blog-post-html',
    template: '<div></div>'
})

export class PostHtmlComponent implements OnInit {
    @Input() html: string;

    constructor(private componentResolver: ComponentResolver, 
        private viewContainerRef: ViewContainerRef) {}
    
    ngOnInit() {        
        var dynamicComponent = compileToComponent(this.html);
        
        this.componentResolver.resolveComponent(dynamicComponent)
            .then(factory => {
                let dynamicComponent = this.viewContainerRef.createComponent(factory, 0);
            })
    }

}