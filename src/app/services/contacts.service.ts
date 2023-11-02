import { Injectable } from '@angular/core';
import { Contact } from './../interfaces/contact';
import { API } from '../constants/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends ApiService {
  contacts: Contact[] | null;
  constructor() {
    super();
    this.contacts = null;
  }

  async getAll(): Promise<Contact[]> {
    const res = await this.getAuth("contacts");
    const resJson: Contact[] = await res.json();
    this.contacts = resJson;
    return resJson;
  }

  /*
  async getById(id: number | string): Promise<Contact | undefined> {
    const res = await this.getAuth("Contact/"+id);
    const resJson = await res.json();
    return resJson[0];
  }
  */

  async getById(id: number | string): Promise<Contact | undefined> {
    if (this.contacts == null)
      this.contacts = await this.getAll();
    const contact = this.contacts.find(c => c.id == id);
    return contact;
  }

  async create(contacto: Contact): Promise<boolean> {
    if (contacto.id) return false;
    const res = await fetch(API + 'contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token
      },
      body: JSON.stringify(contacto),
    });
    return res.ok;
  }

  async edit(contacto: Contact): Promise<boolean> {
    if (!contacto.id) return false;
    const res = await fetch(API + 'contacts', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token
      },
      body: JSON.stringify(contacto),
    });
    return res.ok;
  }

  async delete(id: number): Promise<boolean> {
    const res = await fetch(API + 'contacts?id=' + id, {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer " + this.auth.token
      }
    });
    return res.ok;
  }
}
