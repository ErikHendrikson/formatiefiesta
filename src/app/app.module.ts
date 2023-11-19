import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { PartyPickerComponent } from './components/party-picker/party-picker.component';
import { PartyDisplayComponent } from './components/party-display/party-display.component';
import { FormationCreatorContainerComponent } from './containers/formation-creator-container/formation-creator-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartySeatComponent } from './components/party-seat/party-seat.component';
import { HeaderComponent } from './components/header/header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        PartyPickerComponent,
        PartyDisplayComponent,
        FormationCreatorContainerComponent,
        PartySeatComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
