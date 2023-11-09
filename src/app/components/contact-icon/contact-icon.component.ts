import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'contact-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-icon.component.html',
  styleUrls: ['./contact-icon.component.scss']
})
export class ContactIconComponent {
  @Input({required: true}) contact: Contact = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    profilePicture: '',
    phoneNumber: ''
  };
}