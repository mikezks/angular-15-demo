import { inject } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./shell/auth.service";

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        canMatch: [() => inject(AuthService).accessAllowed || inject(Router).createUrlTree(['/about'])],
        loadChildren: () =>
            import('./booking/flight-booking.routes')
                .then(m => m.FLIGHT_BOOKING_ROUTES)
    },
    {
        path: 'next-flight',
        loadComponent: () =>
            import('./next-flight/next-flight.component')
                .then(m => m.NextFlightComponent)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./about/about.component')
                .then(m => m.AboutComponent)
    },
];
