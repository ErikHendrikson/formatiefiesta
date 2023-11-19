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

    remainingSeats(): number[] {
        const totalSeats = this.selectedParties.reduce((acc, party) => acc + party.value, 0);
        const remaining = 150 - totalSeats;
        return Array.from({ length: remaining });
    }
}
