// tslint:disable-next-line:import-spacing
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
// tslint:disable-next-line:import-spacing
import { HttpClientModule }   from '@angular/common/http';
// tslint:disable-next-line:import-spacing
import { AppComponent }   from './app.component';
// tslint:disable-next-line:import-spacing
import { BookmComponent }   from './bookm.component';
// tslint:disable-next-line:import-spacing
import { AdminComponent }   from './admin.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [ AppComponent,
                   BookmComponent,
                   AdminComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
