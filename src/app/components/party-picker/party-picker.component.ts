import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Party } from '../../models/party.model';

@Component({
    selector: 'app-party-picker',
    templateUrl: './party-picker.component.html',
    styleUrls: ['./party-picker.component.scss']
})
export class PartyPickerComponent {
    showSeats = false;
    showMenu = true;

    @Input() partiesForm: FormGroup = {} as FormGroup;
    @Input() parties: Party[] = [];
    @Input() selectedParties: Party[] = [];

    toggleShowSeats() {
        this.showSeats = !this.showSeats;
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    totalSeats(): number[] {
        const totalSeats = this.selectedParties.reduce((acc, party) => acc + party.value, 0);
        return Array.from({ length: totalSeats });
    }
}
