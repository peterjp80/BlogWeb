import { Post } from './post';

export const posts: Post[] = [
    {
        id: 'test-post',
        title: 'My First Post Yay!',
        html: `
        <blog-code-view language="typescript">
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    title = 'My Blog';
    subtitle = 'An Angular 2 App';
}
        </blog-code-view>
        <blog-toggle-well linkText="Why?">
            Look, I'm in a well!
        </blog-toggle-well>
        <blog-note>
            This is some note!
        </blog-note>
        <blog-note title="Note">
            This is a note with a title.
        </blog-note>
        <blog-note title="Idea" [noteType]="NoteType.Info">
            This is an Idea
        </blog-note>
        `,
        publishedOn: new Date('8/5/2016')
    }
];