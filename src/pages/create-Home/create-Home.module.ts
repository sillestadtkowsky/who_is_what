import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHomePage } from './create-Home';

@NgModule({
  declarations: [
    CreateHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateHomePage),
    TranslateModule.forChild()
  ],
  exports: [
    CreateHomePage
  ]
})
export class CreateHomePageModule { }
