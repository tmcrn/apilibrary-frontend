import { Component } from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzButtonComponent} from "ng-zorro-antd/button";


@Component({
  selector: 'app-users',
    imports: [NzFormModule, ReactiveFormsModule, NzInputDirective, NzFlexDirective, NzButtonComponent],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
    userForm = new FormGroup({
        FirstName: new FormControl<string>(null, [Validators.required]),
        LastName: new FormControl<string>(null, [Validators.required]),
        Email: new FormControl<string>(null, [Validators.required,Validators.email]),
        BirthDate: new FormControl(null, [Validators.required]),
    })

    submitForm() {
        // Pour annuler si le formulaire est invalide
        //if (this.createAuthorForm.invalid) return;

        // Pour obtenir la valeur du formulaire
        console.log(this.userForm.getRawValue())

        // Pour vider le formulaire
        this.userForm.reset()
    }
}
