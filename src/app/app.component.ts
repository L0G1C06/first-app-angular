import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', // describe how Angular refers to the component in templates
  standalone: true, // describe whether the component requires a NgModule 
  imports: [
    HomeComponent,
  ], // to describe the component's dependencies
  templateUrl: './app.component.html', // to describe the component's HTML markup and layout
  styleUrls: ['./app.component.css'], // to list the URLs of the CSS files that the component uses in an array
})
export class AppComponent {
  title = 'homes';
}
