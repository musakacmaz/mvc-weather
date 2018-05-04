import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [HeaderService]
})
export class HeaderModule { }
