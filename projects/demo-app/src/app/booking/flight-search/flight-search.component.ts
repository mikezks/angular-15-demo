import { AuthService } from './../../shell/auth.service';
import { AsyncPipe, CommonModule, JsonPipe, NgForOf, NgIf } from "@angular/common";
import { ApplicationRef, Component, createComponent, EnvironmentInjector, inject, Inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AfterViewInitDirective, CityValidator } from "@demo/shared";
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { Store } from "@ngrx/store";
import { BookingSlice } from "../+state/reducers";
import { selectFlights } from "../+state/selectors";
import { take } from "rxjs";
import { loadFlights } from "../+state/actions";
import { delayFlight } from "../+state/actions";
import { FlightInfoComponent } from "../flight-info/flight-info.component";

@Component({
  standalone: true,
  imports: [
    // CommonModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    JsonPipe,

    FormsModule,
    FlightCardComponent,
    CityValidator,
  ],
  hostDirectives: [ AfterViewInitDirective],
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [
    {
      provide: AuthService,
      useValue: { accessAllowed: false }
    }
  ]
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$ = this.store.select(selectFlights);

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  // authService = inject(AuthService);
  authService = inject(EnvironmentInjector).runInContext(() => inject(AuthService));

  constructor(
    @Inject(Store) private store: Store<BookingSlice>) {

    this.addFlightInfo();
  }

  ngOnInit(): void {
  }

  private addFlightInfo(): void {
    const appRef = inject(ApplicationRef);
    const environmentInjector = inject(EnvironmentInjector);

    inject(AfterViewInitDirective).afterViewInit$.subscribe(() => {
      const hostElement = document.getElementById('flight-info-host');
      if (hostElement) {
        const compRef = createComponent(FlightInfoComponent, { hostElement, environmentInjector });
        appRef.attachView(compRef.hostView);
      }
    });
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({
      from: this.from,
      to: this.to
    }));
  }

  delay(): void {
    this.flights$.pipe(take(1)).subscribe(flights => {
      const id = flights[0].id;
      this.store.dispatch(delayFlight({id}));
    });
  }

}

