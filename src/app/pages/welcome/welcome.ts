import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
    selector: 'app-welcome',
    imports: [
        RouterOutlet,
        RouterLink,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule
    ],
    templateUrl: './welcome.html',
    styleUrl: './welcome.css',
})
export class Welcome {
    isCollapsed = signal(false);
}