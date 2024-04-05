import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'islantilla_angular';
  activeSection: number = 1;
  onSectionSelected(event: any) {
    this.activeSection = event;
  }
}
