import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelfSkillsApplicationSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [SelfSkillsApplicationSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule {}
