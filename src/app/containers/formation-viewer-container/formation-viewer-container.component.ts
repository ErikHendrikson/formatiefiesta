import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Party } from 'src/app/models/party.model';
import { partiesListData } from 'src/app/data/parties-list-data';
import * as confetti from 'canvas-confetti';

@Component({
    selector: 'app-formation-viewer-container',
    templateUrl: './formation-viewer-container.component.html',
    styleUrl: './formation-viewer-container.component.scss'
})
export class FormationViewerContainerComponent implements OnInit {
    selectedParties: Party[] = [];
    name: string = '';

    constructor(private route: ActivatedRoute, private renderer2: Renderer2) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const nameURL = params['name'];
            const selectedPartiesURL = params['selectedParties'];
            const selectedParties = selectedPartiesURL.split(',');
            this.name = nameURL;
            this.selectedParties = partiesListData.filter(party => selectedParties.includes(party.id.toString()))
            this.confetti();
        });
    }

    confetti() {
        const canvas = this.renderer2.createElement('canvas');
        this.renderer2.appendChild(document.body, canvas);

        const myConfetti = confetti.create(canvas, {
            resize: true,
        });

        myConfetti();
    }

}
