import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SidebarComponent } from '@demo/shell';
import { INJECTOR_NODE_NAME } from './app.tokens';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: INJECTOR_NODE_NAME,
      useValue: 'App Component'
    }
  ]
})
export class AppComponent {
  title = 'Hello World!';
}
