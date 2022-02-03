import { Component, OnInit } from '@angular/core';
import {PropsService} from '../props.service';
import {NavController} from '@ionic/angular';
import {User} from '../user';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public props: PropsService, private nav: NavController) { }

  ngOnInit() {
  }

  login() {
    this.nav.navigateForward('/userlogin');
  }

  reg() {
    this.nav.navigateForward('/userreg');
  }

  exit() {
    this.props.setUser(new User());
  }
}
