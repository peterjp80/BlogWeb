import { Component } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';

import { Post, PostComponent, PostHtmlComponent } from './';
import { usingComponentFixture } from '../../test-helpers';

describe('Component: Post', () => {
    beforeEach(() => {
        addProviders([PostComponent, PostHtmlComponent, ]);
    });

    it('should create the component',
        inject([PostComponent], (component: PostComponent) => {
            expect(component).toBeTruthy();
    }));

    it('should render an h1 tag with text matching the post title', 
        usingComponentFixture(PostComponent, fixture => {
            let component = <PostComponent>fixture.componentInstance;
            let element = fixture.nativeElement;

            component.post = <Post>{ title: 'Hello', publishedOn: new Date('8/5/2016') };
            fixture.detectChanges();
            expect(element.querySelector('.blog-post-header h1').innerText).toBe('Hello');
        })
    );

    it('should render a p.lead element with text `Friday, August 5, 2016` when publishedOn is set to `8/5/2016`', 
        usingComponentFixture(PostComponent, fixture => {
            let component = <PostComponent>fixture.componentInstance;
            let element = fixture.nativeElement;

            component.post = <Post>{ title: 'Hello', publishedOn: new Date('8/5/2016') };
            fixture.detectChanges();
            expect(element.querySelector('p.lead').innerText).toBe('Friday, August 5, 2016');
        })
    );

    it('should also render the html from post.html', 
        usingComponentFixture(PostComponent, fixture => {
            let component = <PostComponent>fixture.componentInstance;
            let element = fixture.nativeElement;

            component.post = <Post>{title: 'Hello', html: '<div class="testDiv">Test Reflect Html</div>'};
            fixture.detectChanges();
            expect(element.querySelector('blog-post-html').getAttribute('ng-reflect-html')).toContain('Test Reflect Html');
        })
    );
});