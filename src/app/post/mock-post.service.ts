import { Injectable } from '@angular/core';

import { posts } from './mock-posts';

@Injectable()
export class PostService {

    constructor() { }

    getPosts() {
        return posts;
    }

    getLatestPost() {
        return posts[posts.length - 1];
    }

}