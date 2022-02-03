import { Component } from '@angular/core';
import {PropsService} from '../props.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public p: PropsService) {}

}
