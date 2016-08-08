import { addProviders, async, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { usingComponentFixture } from '../../test-helpers';

describe('Component: Navbar', () => {
   beforeEach(() => {
       addProviders([NavbarComponent]);
   });

   it('should create the component',
       inject([NavbarComponent], (component: NavbarComponent) => {
           expect(component).toBeTruthy();
    }));

   it('should render div.navbar',
       usingComponentFixture(NavbarComponent, fixture => {
         expect(fixture.nativeElement.querySelector('div.navbar')).toBeTruthy();
       })
   );
});