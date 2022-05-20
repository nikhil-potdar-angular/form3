import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  options: any = ['Text', 'Textarea', 'Select', 'Checkbox', 'Radio'];

  reactiveForm!: FormGroup;
  constructor(private fb: FormBuilder,private appService: AppService) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      label: [''],
      fieldType: [''],
      name: [''],
      options: [''],
    });
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
    this.appService.passValue(this.reactiveForm.value);
    this.reactiveForm = this.fb.group({
      label: [''],
      fieldType: [''],
      name: [''],
      options: [''],
    });
  }
}
