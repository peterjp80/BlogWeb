import { Component } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { NoteType } from './note-type';
import { usingComponentFixture } from '../../../test-helpers';

@Component({
    selector: 'blog-note-tester',
    directives: [NoteComponent],
    template: '<blog-note>Some Inner Content</blog-note>'
  }) class NoteTesterComponent {}

describe('Component: Note', () => {
  let tcb: TestComponentBuilder;

  beforeEach(() => {
    addProviders([NoteComponent, TestComponentBuilder]);
  })

  it('should create the component',
        inject([NoteComponent], (component: NoteComponent) => {
            expect(component).toBeTruthy();
    }));

  it('should render h4 tag with `Hello` when title is `Hello',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          component.title = 'Hello';
          fixture.detectChanges();
          expect(element.querySelector('h4').innerText).toBe('Hello');
        })
  );

  it('should render not render an h4 tag when title is not provided',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          fixture.detectChanges();
          expect(element.querySelector('h4')).toBeNull();
        })
  );

  it('should render div with css class `alert-warning` when noteType is not provided',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          fixture.detectChanges();
          expect(element.querySelector('div.alert-warning')).toBeTruthy();
        })
  );

  it('should render div with css class `alert-warning` when noteType is Warn',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          component.noteType = NoteType.Warn;
          fixture.detectChanges();
          expect(element.querySelector('div.alert-warning')).toBeTruthy();
        })
  );

  it('should render div with css class `alert-info` when noteType is Info',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          component.noteType = NoteType.Info;
          fixture.detectChanges();
          expect(element.querySelector('div.alert-info')).toBeTruthy();
        })
  );

  it('should render div with css class `alert-danger` when noteType is Danger',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          component.noteType = NoteType.Danger;
          fixture.detectChanges();
          expect(element.querySelector('div.alert-danger')).toBeTruthy();
        })
  );

  it('should render div with css class `alert-success` when noteType is Success',
    usingComponentFixture(NoteComponent, fixture => {
          let component = <NoteComponent>fixture.componentInstance;
          let element = fixture.nativeElement;
          component.noteType = NoteType.Success;
          fixture.detectChanges();
          expect(element.querySelector('div.alert-success')).toBeTruthy();
        })
  );  
  
  it('should render inner content in a p tag', 
    usingComponentFixture(NoteTesterComponent, fixture => {        
      expect(fixture.nativeElement.querySelector('p').innerText).toBe('Some Inner Content');
    })    
  );
})