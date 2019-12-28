import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelfSkillsApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SelfSkillsApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class SelfSkillsApplicationHomeModule {}
