import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../data/flight';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-my-tickets',
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">{{title}}</h2>
      </div>
      <div class="card-body"></div>
    </div>

    <ng-container *ngFor="let ticket of tickets">
      <flight-card [item]="ticket" [showEditButton]="false"></flight-card>
    </ng-container>
  `
})
export class MyTicketsComponent implements OnInit {

  @Input() title = 'My Tickets';
  @Input() limit = -1;

  tickets: Flight[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.tickets = this.ticketService.get(this.limit);
  }

}
