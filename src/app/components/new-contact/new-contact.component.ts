import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts.service';
import { FormsModule } from '@angular/forms';
import { errorMessage, successMessage } from '../../helpers/messages';

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
    phoneNumber: '',
    description: ''
  };

  async onSubmit(){
    this.contact.id
    ? this.editContact()
    : this.addContact();
  }

  async editContact() {
    const res = await this.service.edit(this.contact);
    this.closeDialog.emit();
    if (res) {
      successMessage("Contact edited");
    } else {
      errorMessage("Failed to edit contact");
    }
  }

  async addContact() {
    const res = await this.service.create(this.contact);
    this.closeDialog.emit();
    if (res) {
      successMessage("Contact created");
    } else {
      errorMessage("Failed to create contact");
    }
  }
}
