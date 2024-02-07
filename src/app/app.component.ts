import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html', // to describe the component's HTML markup and layout
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
