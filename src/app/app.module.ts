import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputSwitchModule, SliderModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import { CompatibilityComponent } from './compatibility/compatibility.component';

const routes: Routes = [
  {path: 'compatibility', component: CompatibilityComponent},
  {path: 'gallery', component: ImageGalleryComponent},
  {path: '**', redirectTo: 'compatibility'}
];


@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    CompatibilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    InputSwitchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
