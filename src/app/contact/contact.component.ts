import { Component } from '@angular/core';
import { Form } from '@angular'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  title = 'rahul-bali-astrology';
  form: any;

  onSubmit(): void {
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    }
  }

}
