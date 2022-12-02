import { NgIf } from '@angular/common';
import { Directive, inject, Input, OnDestroy } from '@angular/core';
import { map, Subject, takeUntil, timer } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[show]',
  hostDirectives: [
    {
      directive: NgIf,
      inputs: [
        'ngIf: show'
      ]
    }
  ]
})
export class ShowDirective implements OnDestroy {
  private ngIfDir = inject(NgIf);
  private destroy$ = new Subject<void>();

  constructor() {
    this.initVisibilityStream();
    this.destroy$.subscribe(() => console.log('ShowDirective destroyed!'));
  }

  private setVisibility(visibility: boolean): void {
    this.ngIfDir.ngIf = visibility;
  }

  private initVisibilityStream(): void {
    timer(3_000, 1_500).pipe(
      map(value => value % 2 === 0),
      takeUntil(this.destroy$)
    ).subscribe(
      visibility => this.setVisibility(visibility)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
