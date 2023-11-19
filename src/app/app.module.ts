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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartySeatComponent } from './components/party-seat/party-seat.component';
import { HeaderComponent } from './components/header/header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormationViewerContainerComponent } from './containers/formation-viewer-container/formation-viewer-container.component';
import { PartyFormationComponent } from './components/party-formation/party-formation.component';


@NgModule({
    declarations: [
        AppComponent,
        PartyPickerComponent,
        PartyDisplayComponent,
        FormationCreatorContainerComponent,
        FormationViewerContainerComponent,
        PartySeatComponent,
        PartyFormationComponent,
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
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
