import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  addForm: FormGroup;
  idExting: any;
  constructor(private formBuilder: FormBuilder, private actiuveRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {


    this.addForm = this.formBuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['']
    })

    this.actiuveRoute.params.subscribe(param => {
      if (param['id']) {
        this.idExting = param['id'] ? true : false;
        this.apiService.getContactbyIds(param['id']).subscribe(resp => {
          this.addForm.patchValue({
            id: resp['id'],
            firstName: resp['firstName'],
            lastName: resp['lastName'],
            email: resp['email'],
            phone: resp['phone']
          })
        })

      }
    })
  }


  onSubmit(frmVal) {
    if (this.idExting) {
      this.apiService.updateConatcts(frmVal['id'], frmVal).subscribe(resp => {
        this.router.navigate(['/contact-list'])
      })
    } else {
      this.apiService.postContacts(frmVal).subscribe(res => {
        this.router.navigate(['/contact-list'])
      })
    }

    console.log("Form Submitted Value", frmVal);

  }

}
