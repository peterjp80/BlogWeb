import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent, Post, PostService } from './post';

@Component({
  selector: 'blog-root',
  templateUrl: 'app.component.html',
  directives: [NavbarComponent, PostComponent],
  providers: [PostService]
})

export class AppComponent {
    latestPost: Post;
    constructor(private postService: PostService) { }

    ngOnInit() {
      this.latestPost = this.postService.getLatestPost();
    }
}