import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { PartyPickerComponent } from './components/party-picker/party-picker.component';
import { PartyDisplayComponent } from './components/party-display/party-display.component';
import { FormationCreatorContainerComponent } from './containers/formation-creator-container/formation-creator-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartySeatComponent } from './components/party-seat/party-seat.component';

@NgModule({
    declarations: [
        AppComponent,
        PartyPickerComponent,
        PartyDisplayComponent,
        FormationCreatorContainerComponent,
        PartySeatComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
