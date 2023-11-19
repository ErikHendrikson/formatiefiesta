import { Component, Input } from '@angular/core';
import { Party } from 'src/app/models/party.model';

@Component({
    selector: 'app-party-formation',
    templateUrl: './party-formation.component.html',
    styleUrl: './party-formation.component.scss'
})
export class PartyFormationComponent {
    @Input() selectedParties: Party[] = [];
    @Input() showSeats: boolean = true;

    remainingSeats(): number[] {
        const totalSeats = this.selectedParties.reduce((acc, party) => acc + party.value, 0);
        const remaining = 150 - totalSeats;
        return Array.from({ length: remaining });
    }
}
