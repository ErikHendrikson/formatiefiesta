import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Party } from '../../models/party.model';

@Component({
    selector: 'app-party-picker',
    templateUrl: './party-picker.component.html',
    styleUrls: ['./party-picker.component.scss']
})
export class PartyPickerComponent {

    @Input() partiesForm: FormGroup = {} as FormGroup;
    @Input() parties: Party[] = [];
}
