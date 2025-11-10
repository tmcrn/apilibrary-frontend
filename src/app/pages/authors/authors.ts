import { Component } from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";

@Component({
  selector: 'app-authors',
  imports: [NzFormModule, NzInputDirective, ReactiveFormsModule, NzButtonComponent, NzFlexDirective],
  templateUrl: './authors.html',
  styleUrl: './authors.css',
})
export class Authors {
    authorForm = new FormGroup({
        name: new FormControl<string>(null, [Validators.required]),
        firstname: new FormControl<string>(null, [Validators.required]),
    })

    submitForm() {
        // Pour annuler si le formulaire est invalide
        //if (this.createAuthorForm.invalid) return;

        // Pour obtenir la valeur du formulaire
        console.log(this.authorForm.getRawValue())

        // Pour vider le formulaire
        this.authorForm.reset()
    }
}
