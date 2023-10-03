import { Injectable } from '@angular/core';
import { Contact } from './../interfaces/contact';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  async create(contacto:Contact): Promise<boolean> {
    if(contacto.id) return false;
    const res = await fetch(API + 'contacts', {
      method:'POST',
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(contacto)
    });
    return res.ok;
  };

  async delete(id:number):Promise<boolean> {
    const res = await fetch(API+'contactos/' + id, {
      method:'DELETE'
    });
    return res.ok;
  };
  
  async edit(contacto:Contact):Promise<boolean> {
    if(!contacto.id) return false;
    const res = await fetch(API + 'contactos', {
      method:'PUT',
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(contacto)
    });
    return res.ok;
  };
  
  async getAll():Promise<Contact[]> {
    const res = await fetch(API + "contactos.json");
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id: number | string): Promise<Contact | undefined> {
    const contactos = await this.getAll();
    return contactos.find(contacto => contacto.id == id);
  };

}
