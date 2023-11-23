import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  service: ContactsService = inject(ContactsService);
  contacts: Contact[] = [];

  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.contacts = res;
    });
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}
