import {Component, inject} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {FormValidatorService} from "../../services/form-validator.service";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";


@Component({
  selector: 'app-books',
    imports: [NzFormModule, ReactiveFormsModule, NzInputDirective, NzButtonComponent, NzFlexDirective, NzDatePickerComponent],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books{
    private formValidator = inject(FormValidatorService);

    bookForm=new FormGroup({
        title: new FormControl<string>(null,[Validators.required]),
        author: new FormControl(null,[Validators.required]),
        releaseYear: new FormControl(null,[Validators.required]),
        ISBN: new FormControl(null,[Validators.required]),
    })

    submitForm() {
        // Pour annuler si le formulaire est invalide
        this.formValidator.validateForm(this.bookForm)

        if (this.bookForm.invalid) return
        // Pour obtenir la valeur du formulaire
        console.log(this.bookForm.getRawValue())

        // Pour vider le formulaire
        this.bookForm.reset()
    }

    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ];

    constructor(public msg: NzMessageService) {}
}
