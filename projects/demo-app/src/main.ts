import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducer } from './app/+state';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { INJECTOR_NODE_NAME } from './app/app.tokens';

import { authInterceptor } from './app/shared/auth.interceptor';
import { LegacyInterceptor } from './app/shared/legacy.interceptor';
import { TicketsModule } from './app/tickets/tickets.module';

bootstrapApplication(AppComponent, {
  providers: [

    provideHttpClient(
      withInterceptors([authInterceptor]),
      withInterceptorsFromDi(),
    ),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LegacyInterceptor,
      multi: true,
    },

    {
      provide: INJECTOR_NODE_NAME,
      useValue: 'App Root'
    },

    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      // withDebugTracing(),
    ),

    provideStore(reducer),
    provideEffects([]),
    provideStoreDevtools(),

    importProvidersFrom(TicketsModule),
  ]
});
