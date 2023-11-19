import { Component, Input } from '@angular/core';
import { Party } from 'src/app/models/party.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-party-display',
    templateUrl: './party-display.component.html',
    styleUrls: ['./party-display.component.scss'],
})
export class PartyDisplayComponent {
    @Input() selectedParties: Party[] = [];
    name: string = '';

    constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) { }

    share(action: string) {
        const selectedPartyIds = this.selectedParties.map(party => party.id);

        if (!selectedPartyIds.length) {
            this.showCopiedMessage('Kies eerst jouw regering');
            return;
        }

        const protocol = window.location.protocol;
        const hostname = window.location.hostname;
        const port = window.location.port ? `:${window.location.port}` : '';
        const baseUrl = `${protocol}//${hostname}${port}`;

        const link = `${baseUrl}/formatie?name=${encodeURIComponent(this.name)}&selectedParties=${encodeURIComponent(selectedPartyIds.join(','))}`;

        if (action === 'whatsapp') {
            const message = `Ik heb een regering samengesteld: ${link}`;
            const href = `whatsapp://send?text=${encodeURIComponent(message)}`;
            window.location.href = href;
        }

        if (action === 'link') {
            this.clipboard.copy(link);
            this.showCopiedMessage('Gekopieerd');
        }
    }

    private showCopiedMessage(message: string) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    }
}
