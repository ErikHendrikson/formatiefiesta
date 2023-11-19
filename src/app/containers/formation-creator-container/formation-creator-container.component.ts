import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Party } from 'src/app/models/party.model';
import { partiesListData } from 'src/app/data/parties-list-data';

@Component({
    selector: 'app-formation-creator-container',
    templateUrl: './formation-creator-container.component.html',
    styleUrls: ['./formation-creator-container.component.scss']
})
export class FormationCreatorContainerComponent {
    partiesForm = {} as FormGroup;
    selectedParties: Party[] = [];
    parties: Party[] = [];

    constructor(private fb: FormBuilder) {
        this.parties = partiesListData;
    }

    ngOnInit() {
        this.partiesForm = this.fb.group({
            selectedOptions: [[]]
        });

        this.partiesForm.get('selectedOptions')?.valueChanges.subscribe((selectedOptions) => {
            this.onOptionsSelected(selectedOptions);
        });
    }

    onOptionsSelected(selectedOptions: string[]) {
        this.selectedParties = this.parties.filter(party => selectedOptions.includes(party.label));
    }
}
