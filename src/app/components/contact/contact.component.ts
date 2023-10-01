import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fromSubmit(val:any)
  {
console.log(val.controls);
  }

}
