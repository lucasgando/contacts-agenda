import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactIconComponent } from "../../components/contact-icon/contact-icon.component";
import { NewContactComponent } from "../../components/new-contact/new-contact.component";


@NgModule({
    declarations: [
        ContactDetailsComponent
    ],
    imports: [
        CommonModule,
        ContactDetailsRoutingModule,
        ContactIconComponent,
        NewContactComponent
    ]
})
export class ContactDetailsModule { }
