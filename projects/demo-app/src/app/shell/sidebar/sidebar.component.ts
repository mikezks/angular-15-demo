import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-sidebar-cmp',
    imports: [
      RouterLink
    ],
    templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
}
