import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  NgForm,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('submitForm') submitForm!:NgForm
  formData: any;
  formArr: any = [];
  form!: FormGroup;
  items!: FormArray;
  formArray!: FormGroup;
  arr: any;
  temp: any;
  items1: any;
  model: any = {};
  value: boolean = true
  checkArr: any = []
  ele:any
  temp1:any
  
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      items: new FormArray([]),
    });

    this.appService.subject.subscribe((data: any) => {
      console.log('next subscribed value: ' + JSON.stringify(data));
      this.formData = JSON.stringify(data);
      this.formData = JSON.parse(this.formData);
      this.addItem();
      console.log(this.form.value);
      this.arr = this.form.value.items;
    });
  }
  createItem(): FormGroup {
    console.log(this.formData);
    return this.fb.group(this.formData);
  }

  addItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  getFormArray(): FormArray {
    return this.form.get('items') as FormArray;
  }

  onSubmit() {
    this.arr = this.form.value.items;
    console.log(this.arr);
    var keyArray = this.arr.map((item: any) => {
      return item['name'];
    });
    console.log(keyArray);
    // let obj = {
    //  [keyArray[4]]: '',
    // };
    // console.log(obj);

    this.formArray = this.fb.group({
      [keyArray[0]]: '',
      [keyArray[1]]: '',
      [keyArray[2]]: '',
      [keyArray[3]]: '',
      [keyArray[4]]: '',
    });
    console.log(this.formArray.value);
  }

   submit() {
   console.log(this.checkArr)
   console.log(this.submitForm.value)
   this.submitForm.controls[this.arr[0].name].patchValue(this.checkArr)
   console.log(this.submitForm.value)
   this.submitForm.reset()
   this.checkArr=[]

  }

  checkBox(item: any, data: any) {
    console.log(data.target.value)
    let obj=this.submitForm.value
    // for (const item of Object.entries(obj)) {
    //     console.log(item)
    //     if(item[1]==true || false){
    //       this.temp1=item[0]
    //       console.log(item[0]);
    //     }

    // }
  
    if (data.target.checked) {
      this.checkArr.push(item)
    }
    else {
      let id = this.checkArr.indexOf(item)
      console.log(id)
      this.checkArr.splice(id,1)
    }
    console.log(this.checkArr)
  }
}
