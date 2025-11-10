import { Component } from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-books',
    imports: [NzListModule, NzTypographyModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books{
    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ];

    constructor(public msg: NzMessageService) {}
}
