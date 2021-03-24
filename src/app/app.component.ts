import { Component } from '@angular/core';
import {WebsocketService} from './websocket.service';
import {PropsService} from './props.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private p: PropsService) {
    p.init();
  }
}
