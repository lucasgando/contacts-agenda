import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';
import { ContactIconComponent } from "../contact-icon/contact-icon.component";

@Component({
    selector: 'contact-card',
    standalone: true,
    templateUrl: './contact-card.component.html',
    styleUrls: ['./contact-card.component.scss'],
    imports: [CommonModule, ContactIconComponent]
})
export class ContactCardComponent {
  @Input() contact: Contact = {
    id: 0,
    name: 'aaaaaaaaaaa',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    description: '',
    profilePicture: ''
  }
}
