import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyTextDirective } from './empty-text.directive';
import { EmptyTextService } from './empty-text.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EmptyTextDirective],
  declarations: [EmptyTextDirective],
  providers: [EmptyTextService]
})
export class EmptyModule { }

