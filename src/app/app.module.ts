import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputSwitchModule, InputTextModule, RadioButtonModule, SliderModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {CompatibilityComponent} from './compatibility/compatibility.component';
import {GridConstructorComponent} from './grid-constructor/grid-constructor.component';
import {ZoningAndPlacingComponent} from './zoning-and-placing/zoning-and-placing.component';
import { PositioningComponent } from './positioning/positioning.component';
import { FlexGridComponent } from './flex-grid/flex-grid.component';

const routes: Routes = [
  {path: 'compatibility', component: CompatibilityComponent},
  {path: 'constructor', component: GridConstructorComponent},
  {path: 'gallery', component: ImageGalleryComponent},
  {path: 'area', component: ZoningAndPlacingComponent},
  {path: 'flex-grid', component: FlexGridComponent},
  {path: 'positioning', component: PositioningComponent},
  {path: '**', redirectTo: 'compatibility'}
];


@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    CompatibilityComponent,
    GridConstructorComponent,
    ZoningAndPlacingComponent,
    PositioningComponent,
    FlexGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    InputSwitchModule,
    InputTextModule,
    RadioButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
