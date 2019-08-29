import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allContacts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getContacts().subscribe(res => {
      console.log("constacts ", res)
      this.allContacts = res
    })
  }

  removeFormList(id, index) {
    this.apiService.deleteContact(id).subscribe(resp => {
      if (resp) {
        this.allContacts.splice(index, 1)
      }
    })
  }

}
