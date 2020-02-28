import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
