import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-party-seat',
    template: `<div [style.width.px]="size" [style.height.px]="size" [style.border-radius.px]="size / 2" [style.background-color]="color"></div>`,
    styleUrls: ['./party-seat.component.scss']
})
export class PartySeatComponent {
    @Input() size = 20;
    @Input() color = 'blue';
}
