import {Component, inject} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {FormValidatorService} from "../../services/form-validator.service";

@Component({
  selector: 'app-authors',
  imports: [NzFormModule, NzInputDirective, ReactiveFormsModule, NzButtonComponent, NzFlexDirective],
  templateUrl: './authors.html',
  styleUrl: './authors.css',
})
export class Authors {
    private formValidator = inject(FormValidatorService);

    authorForm = new FormGroup({
        name: new FormControl<string>(null, [Validators.required]),
        firstname: new FormControl<string>(null, [Validators.required]),
    })

    submitForm() {
        // Pour annuler si le formulaire est invalide
        this.formValidator.validateForm(this.authorForm);

        if (this.authorForm.invalid) return;

        // Pour obtenir la valeur du formulaire
        console.log(this.authorForm.getRawValue())

        // Pour vider le formulaire
        this.authorForm.reset()
    }
}
