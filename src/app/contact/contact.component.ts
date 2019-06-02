import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;

  submitted : boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],

    });
  }

  onSubmit(){
    this.submitted = true;

    console.log('onSubmit: this.messageForm.invalid:',this.messageForm.invalid);

    if (this.messageForm.invalid){
      return;
    }

    this.success = true;

    //console.log('contact.component: onSubmit: this.name:',this.name,'this.message:',this.message);

    console.log('contact.component: onSubmit: messageForm:',this.messageForm);

    // send to amazon SNS/SES or where ever
  }

  ngOnInit() {
  }

}
