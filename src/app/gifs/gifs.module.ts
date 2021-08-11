import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifSearchComponent } from './gif-search/gif-search.component';
import { GifResultComponent } from './gif-result/gif-result.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifSearchComponent,
    GifResultComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
