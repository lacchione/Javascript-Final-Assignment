import { Component } from '@angular/core';
import {LogUpdateService} from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Luca's Quarantine Video Games";

    constructor(private logService: LogUpdateService) {}
}
