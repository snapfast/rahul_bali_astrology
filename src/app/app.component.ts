import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css'],
  imports: [NgOptimizedImage],
})
export class AppComponent {
  title = 'rahul-bali-astrology';
}
