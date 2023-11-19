import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-party-seat',
    templateUrl: './party-seat.component.html',
    styleUrls: ['./party-seat.component.scss']
})
export class PartySeatComponent {
    @Input() size = 20;
    @Input() color = 'blue';
}
