import {Component, inject} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {FormValidatorService} from "../../services/form-validator.service";

@Component({
    selector: 'app-loans',
    imports: [NzFormModule, FormsModule, NzButtonComponent, NzFlexDirective, NzInputDirective, ReactiveFormsModule, NzDatePickerComponent],
    templateUrl: './loans.html',
    styleUrl: './loans.css',
})
export class Loans {
    private formValidator = inject(FormValidatorService);

    loanForm = new FormGroup({
        book: new FormControl<string>(null, [Validators.required]),
        user: new FormControl<string>(null, [Validators.required]),
        Date: new FormControl<string>(null, [Validators.required]),
        PlannedReturningDate: new FormControl<string>(null, [Validators.required]),
    })

    submitForm() {
        // Pour annuler si le formulaire est invalide
        this.formValidator.validateForm(this.loanForm)

        if (this.loanForm.invalid) return;

        // Pour obtenir la valeur du formulaire
        console.log(this.loanForm.getRawValue())

        // Pour vider le formulaire
        this.loanForm.reset()
    }
}
