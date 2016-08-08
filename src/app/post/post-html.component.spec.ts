import { Component, ViewContainerRef } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { PostHtmlComponent } from './post-html.component';
import { usingComponentFixture } from '../../test-helpers';

@Component({
  template: '<blog-post-html [html]="html"></blog-post-html>',
  directives: [PostHtmlComponent]
}) class PostHtmlTesterComponent {
  html: string = 'Test Reflect Html';
}

describe('Component: PostHtml', () => {
   beforeEach(() => {
       addProviders([PostHtmlComponent, ViewContainerRef]);
   });

   it('should create the component',
       inject([PostHtmlComponent], (component: PostHtmlComponent) => {
           expect(component).toBeTruthy();
    }));

   it('should render blog-post-html with ng-reflect-html set',
       usingComponentFixture(PostHtmlTesterComponent, fixture => {
         let component = <PostHtmlTesterComponent>fixture.componentInstance;
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('blog-post-html').getAttribute('ng-reflect-html')).toBe('Test Reflect Html');
       })
   );
});