import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  selectedLevel: any;
    users = {
    id: null,
    email: null,
    firstname: null,
    lastname: null,
    avtar: null
  }
  allusers: any[] = [];

  constructor(private common: CommonService) { }

  data: any[] = [
    { id: 1, name: "1" },
    { id: 2, name: "2" }

  ];



  ngOnInit(): void {
  }
  selected() {
    console.log(this.selectedLevel)
  }
  getusers() {
     console.log(this.selectedLevel.id);
     
    
this.allusers = JSON.parse(localStorage.getItem('user') || '[]')
    this.common.getusers(this.selectedLevel.id).subscribe((response: any) => {
      console.log(response);
      this.allusers = this.allusers.concat(response['data']);
      localStorage.setItem("user", JSON.stringify(this.allusers));
      this.allusers = JSON.parse(localStorage.getItem('user') || '[]');
    });
  }

  deleteperson(data: any) {
    this.allusers.length = 0
    this.allusers = JSON.parse(localStorage.getItem('user') || '[]');
    this.allusers = this.allusers.filter(item => item.id != data)
    localStorage.setItem("user", JSON.stringify(this.allusers));
    console.log(this.allusers);


  }

}
