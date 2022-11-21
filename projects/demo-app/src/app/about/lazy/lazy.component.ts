import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-lazy',
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="visible">
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
