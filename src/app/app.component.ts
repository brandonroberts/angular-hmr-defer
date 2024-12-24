import { Component } from '@angular/core';
import { LazyComponent } from './lazy/lazy.component';

@Component({
  selector: 'app-root',
  imports: [LazyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hmr-defer';
}
