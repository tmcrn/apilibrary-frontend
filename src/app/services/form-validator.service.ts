import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class FormValidatorService {
    public validateForm(formGroup: FormGroup) {
        for (const control of Object.values(formGroup.controls)) {
            control.markAllAsTouched();
            control.updateValueAndValidity();
        }
    }
}
