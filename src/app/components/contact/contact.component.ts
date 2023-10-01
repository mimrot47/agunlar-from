import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   usrs={
    name:"",
    email:"",
    contact:""
  }
  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl(''),
    phone: new FormControl('')
  });
  fromSubmit(val:any)
  {
  this.usrs.name=val.name
  this.usrs.email=val.email
  this.usrs.contact=val.phone
  console.log(this.usrs);
  }

}
