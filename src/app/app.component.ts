import { Component } from '@angular/core';
import { StitchService } from './services/stitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodlensemvp';

  constructor(private stitch: StitchService) {
    this.stitch.init();
  }
}
