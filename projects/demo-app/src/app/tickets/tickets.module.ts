import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../booking/flight-card/flight-card.component';
import { MyTicketsComponent } from './my-tickets.component';
import { RouterModule } from '@angular/router';
import { TicketService } from './ticket.service';

// This is for demonstrating the interaction between
// code that uses NgModules and code that doesn't.

@NgModule({
  imports: [
    CommonModule,
    FlightCardComponent,
    RouterModule.forChild([
      { path: 'my-tickets', component: MyTicketsComponent }
    ])
  ],
  declarations: [
    MyTicketsComponent
  ],
  providers: [
    // For demo purposes
    // Please consider using providedIn: 'root' instead
    TicketService
  ],
  exports: [
    MyTicketsComponent
  ]
})
export class TicketsModule { }
