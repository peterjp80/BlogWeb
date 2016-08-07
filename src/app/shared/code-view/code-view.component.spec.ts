import { Component } from '@angular/core';
import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { CodeViewComponent } from './code-view.component';
import { usingComponentFixture } from '../../../test-helpers';

@Component({
    directives: [CodeViewComponent],
    template: '<blog-code-view>Some Inner Content</blog-code-view>'
  }) class CodeViewTesterComponent {}

describe('Component: CodeView', () => {
   beforeEach(() => {
       addProviders([CodeViewComponent]);
   });

   it('should create the component',
       inject([CodeViewComponent], (component: CodeViewComponent) => {
           expect(component).toBeTruthy();
    }));

   it('should render a pre tag with the code class',
       usingComponentFixture(CodeViewComponent, fixture => {
         expect(fixture.nativeElement.querySelector('pre.code')).toBeTruthy();
       })
   );

   it('should render a code tag with the class `Something` when language is set to `Something`',
       usingComponentFixture(CodeViewComponent, fixture => {
         let component = <CodeViewComponent>fixture.componentInstance;
         component.language = 'Something';
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('code.Something')).toBeTruthy();
       })
   );

   it('should render content as the inner text of the code element', 
    usingComponentFixture(CodeViewTesterComponent, fixture => {
      expect(fixture.nativeElement.querySelector('code').innerText).toBe('Some Inner Content');
    })
   );

});