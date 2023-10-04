import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder,  } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';



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
  contactForm:FormGroup;

  constructor(private fb:FormBuilder, private userDataService:UserDataService){
  this.contactForm = fb.group({
    name:[,Validators.required],
    email: [,],
    phone: []
  });
  this.userDataService.getUserData().subscribe(res=>{
    console.log(res);
  });
}
  fromSubmit()
  {
  var name=this.contactForm.get('name');
  var email=this.contactForm.get('email');
  var contact=this.contactForm.get('contact');
  console.log(name?.value);
  }

}
