import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.scss'],
})
export class BasicFormsComponent implements OnInit {
  nameField = new FormControl('Soy un control');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  numberField = new FormControl('');
  dateField = new FormControl(12);

  categoryField = new FormControl('category-2');
  tagField = new FormControl('');

  agreeField = new FormControl(false);

  genderField = new FormControl('');

  zoneField = new FormControl('');



  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }
}
