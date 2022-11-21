import { AfterViewInit, Directive } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[afterViewInit]',
  standalone: true
})
export class AfterViewInitDirective implements AfterViewInit {
  afterViewInit$ = new Subject<void>();

  ngAfterViewInit(): void {
    this.afterViewInit$.next();
  }
}
