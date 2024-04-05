import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { MyModuleRoutingModule } from './my-module-routing.module';

@NgModule({
  imports: [CommonModule, MyModuleRoutingModule],
  declarations: [MyModuleComponent],
})
export class MyModuleModule {}
