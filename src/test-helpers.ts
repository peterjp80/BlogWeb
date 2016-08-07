import { inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

export function usingComponentFixture(component: any, result: (f: ComponentFixture<{}>) => any) : any
{
  return inject([TestComponentBuilder], (tb: TestComponentBuilder) => {
      tb.createAsync(component).then(fixture => {
        result(fixture);
      })
    })
}