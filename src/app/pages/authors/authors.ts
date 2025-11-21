import {Component, inject, OnInit, signal} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {FormValidatorService} from "../../services/form-validator.service";
import {NzTableModule} from "ng-zorro-antd/table";
import {AuthorsService, GetAuthorDto} from "../../services/api";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-authors',
    imports: [NzFormModule, NzInputDirective, ReactiveFormsModule, NzButtonComponent, NzFlexDirective, NzTableModule],
  templateUrl: './authors.html',
  styleUrl: './authors.css',
})
export class Authors implements OnInit {
    private authorsService = inject(AuthorsService)

    authors = signal<GetAuthorDto[]>([]);

    constructor() {
        console.log('Page author affichée');
    }

    async ngOnInit(){
        await this.fetchAuthors();
    }

    async fetchAuthors() {
        const authors = await firstValueFrom(this.authorsService.getAllAuthorsEndpoint());
        this.authors.set(authors);
    }




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
