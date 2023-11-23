import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contactsService = inject(ContactsService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  contact: Contact = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    description: '',
    profilePicture: ''
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.contactsService.getById(params['id']).then(res => {
        if (res != undefined) this.contact = res;
      });
    });
  }

  deleteContact() {
    Swal.fire({
      title:
        'Are you sure you want to delete ' +
        this.contact.name +
        ' ' +
        this.contact.lastName +
        '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactsService.delete(this.contact.id).then((res) => {
          if (res) {
            //Contacto borrado
            Swal.fire('Deleted!', 'Your contact has been deleted.', 'success');
            this.router.navigate(['contacts']);
          } else {
            //Error borrando contacto
            Swal.fire(
              'Error deleting contact',
              'Try again.',
              'error'
            );
          }
        });
      }
    });
  }
}
