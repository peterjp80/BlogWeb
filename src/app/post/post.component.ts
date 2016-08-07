import { Component, Input, DynamicComponentLoader, ViewContainerRef, OnInit } from '@angular/core';

import { PostHtmlComponent } from './post-html.component';
import { Post } from './post';

@Component({
selector: 'blog-post',
templateUrl: 'post.component.html',
directives: [PostHtmlComponent]
})
export class PostComponent {
    @Input() post: Post;
    
}