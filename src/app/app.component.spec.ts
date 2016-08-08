import { provide } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PostService, Post } from './post';
import { usingComponentFixture } from '../test-helpers';

describe('Component: App', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let postService = new PostService();
  let post = <Post>{id: "test-id"};
  postService.getLatestPost = jasmine.createSpy('getLatestPost').and.returnValue(post);

   beforeEach( 
     async(inject([TestComponentBuilder], (tb: TestComponentBuilder) => {
         tb.overrideProviders(AppComponent, [provide(PostService, {useValue: postService})])
          .createAsync(AppComponent).then(fixture => {
            this.fixture = fixture;
            this.component = <AppComponent>fixture.componentInstance;
            this.fixture.detectChanges();
        })
      }))   
   );

   it('should create the component', () => {
     expect(this.component).toBeTruthy();
   });

   it('should get latest post from PostService ', () => {      
      expect(this.component.latestPost.id).toBe('test-id')
   });

   it('should render blog-navbar', () => {
     expect(this.fixture.nativeElement.querySelector('div#app blog-navbar')).toBeTruthy();
   });

   it('should render blog-post', () => {
     expect(this.fixture.nativeElement.querySelector('div#app blog-post')).toBeTruthy();
   })
});