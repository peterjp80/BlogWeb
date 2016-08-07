import { Component } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { ToggleWellComponent } from './toggle-well.component';
import { usingComponentFixture } from '../../../test-helpers';

@Component({
    directives: [ToggleWellComponent],
    template: '<blog-toggle-well>Some Inner Content</blog-toggle-well>'
  }) class ToggleWellTesterComponent {}

describe('Component: ToggleWell', () => {
   beforeEach(() => {
       addProviders([ToggleWellComponent]);
   });

   it('should create the component',
       inject([ToggleWellComponent], (component: ToggleWellComponent) => {
           expect(component).toBeTruthy();
    }));

   it('should render an anchor tag with text `Click Me` when linkText is `Click Me`',
       usingComponentFixture(ToggleWellComponent, fixture => {
         let component = <ToggleWellComponent>fixture.componentInstance;
         let element = fixture.nativeElement;

         component.linkText = 'Click Me';
         fixture.detectChanges();
         expect(element.querySelector('a').innerText).toBe('Click Me');
       })
   );

   it('should let the toggle() function change the output of the isHidden() function', 
    inject([ToggleWellComponent], (component: ToggleWellComponent) => {
      expect(component.isHidden()).toBeTruthy();
      component.toggle();
      expect(component.isHidden()).toBeFalsy();
      component.toggle();
      expect(component.isHidden()).toBeTruthy();
    })
   );

   it('should render with the well hidden',
       usingComponentFixture(ToggleWellComponent, fixture => {
         let component = <ToggleWellComponent>fixture.componentInstance;
         let element = fixture.nativeElement;

         component.linkText = 'Any';
         fixture.detectChanges();
         expect(element.querySelector('div.well').getAttribute('ng-reflect-hidden')).toBe('true')
       })
   );

   it('should render with the well displayed after toggle() is called',
       usingComponentFixture(ToggleWellComponent, fixture => {
         let component = <ToggleWellComponent>fixture.componentInstance;
         let element = fixture.nativeElement;

         component.toggle();
         fixture.detectChanges();
         expect(element.querySelector('div.well').getAttribute('ng-reflect-hidden')).toBe('false')
       })
   );

   it('should render inner content in the well', 
    usingComponentFixture(ToggleWellTesterComponent, fixture => {        
      expect(fixture.nativeElement.querySelector('div.well').innerText).toBe('Some Inner Content');
    })    
  );
});