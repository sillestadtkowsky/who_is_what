import { Component, Input } from '@angular/core';

import { Wohnung } from '../../models/wohnung.model';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'wohnungen',
  templateUrl: 'wohnungen.component.html'
})
export class WohnungenComponent {

    @Input()
    public value: Wohnung;

    constructor(
      private navCtl: NavController
    ) {}

    public openWohnung(): void {
      this.navCtl.push('ViewHomePage', this.value);
    }

}
