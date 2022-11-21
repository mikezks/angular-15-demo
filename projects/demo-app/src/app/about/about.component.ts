import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">About</h2>
      </div>

      <div class="card-body"></div>
    </div>
    <ng-container #container></ng-container>
  `
})
export class AboutComponent {
  title = 'Standalone Demo';

  @ViewChild('container', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  async ngOnInit() {
    const esm = await import('./lazy/lazy.component');
    const ref = this.viewContainer.createComponent(esm.LazyComponent)
    ref.setInput('title', `Lazy Sub Component !!`);
  }
}

export default AboutComponent;
