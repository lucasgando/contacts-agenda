import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from './../../components/contact-card/contact-card.component';
import { NewContactComponent } from "../../components/new-contact/new-contact.component";


@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        ContactCardComponent,
        NewContactComponent
    ]
})
export class ContactsModule { }
