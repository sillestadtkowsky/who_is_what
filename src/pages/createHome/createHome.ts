import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Wohnung } from '../../models/wohnung.model';
import { WhoIsWhatProvider } from '../../providers/whoIsWhat.provider';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-createHome',
  templateUrl: 'createHome.html'
})
export class CreateHomePage {

  private name: string;
  private form: FormGroup;

  constructor(
    private navCtl: NavController,
    private wiwProvider: WhoIsWhatProvider,
    private toaster: ToastController
  ) {
    
    this.form = new FormGroup({ 
      homeName: new FormControl(), 
      info:new FormControl()
    });

    this.name = "?"
  }

  public addHome() : void {

    this.wiwProvider.createWohnung(new Wohnung(this.form.controls['homeName'].value))
      .then(wohnung => {
        this.form.reset();
        this.toaster.create({
          closeButtonText: 'X',
          dismissOnPageChange: false,
          cssClass: 'success',
          position: 'top',
          duration: 5000,
          message: 'Wohnung "' + wohnung.name + '" wurde erzeugt.'
        }).present();
        
        this.navCtl.pop();
      })
      .catch(error => {
        this.toaster.create({
          closeButtonText: 'X',
          dismissOnPageChange: true,
          cssClass: 'error',
          duration: 5000,
          position: 'top',
          message: 'Es ist ein Fehler aufgetreten: ' + JSON.stringify(error)
        }).present();
        console.error(error);
      });
  }
}
