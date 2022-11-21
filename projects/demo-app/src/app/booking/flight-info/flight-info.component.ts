import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Flight Info</h2>
      </div>

      <div class="card-body">
        <p>Here is the latest security information about your flight.</p>
      </div>
    </div>
  `
})
export class FlightInfoComponent {

}
