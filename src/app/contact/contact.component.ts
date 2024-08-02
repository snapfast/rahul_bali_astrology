import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  title = 'rahul-bali-astrology';
  form: any;

  onSubmit(): void {
    if (this.form?.valid) {
      console.log('Form data:', this.form.value);
    }
  }
}
