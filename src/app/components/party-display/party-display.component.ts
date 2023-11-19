import { Component, Input } from '@angular/core';
import { Party } from 'src/app/models/party.model';

@Component({
    selector: 'app-party-display',
    templateUrl: './party-display.component.html',
    styleUrls: ['./party-display.component.scss']
})
export class PartyDisplayComponent {
    @Input() selectedParties: Party[] = [];

    constructor() {
    }
}
