import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  service: ContactsService = inject(ContactsService);

  @Output() closeDialog = new EventEmitter();
  @Input({required: false}) contact: Contact = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    profilePicture: '',
    phoneNumber: ''
  };

  async onSubmit(){
    this.contact.id ?
    this.editContact() :
    this.addContact();
  }

  async editContact() {
    throw new console.error('Edit contact not implemented');
    
  }

  addContact() {
    throw new console.error('Add contact not implemented');

  }
}
