import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ShowDirective } from "@demo/shared";

@Component({
  standalone: true,
  selector: 'app-lazy',
  imports: [
    CommonModule,
    ShowDirective
  ],
  template: `
    <div class="card" *show="visible">
      <div class="card-header">
        <h2 class="card-title">{{ title }}</h2>
      </div>

      <div class="card-body"></div>
    </div>
  `
})
export class LazyComponent {
  @Input() title = 'Standalone Demo';
  visible = true;
}
