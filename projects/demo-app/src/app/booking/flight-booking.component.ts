import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { INJECTOR_NODE_NAME } from "../app.tokens";

@Component({
  standalone: true,
  selector: 'flight-booking',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './flight-booking.component.html',
  providers: [
    {
      provide: INJECTOR_NODE_NAME,
      useValue: 'Flight Booking'
    }
  ]
})
export class FlightBookingComponent {
}
