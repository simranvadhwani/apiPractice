import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  selectedLevel: any;
  users={
    id:null,
    email:null,
    firstname:null,
    lastname:null,
    avtar:null
  }
  allusers:any[]=[];

  constructor(private common:CommonService) { }

  data: any[] = [
    { id: 1, name: "1" },
    { id: 2, name: "2" }
    
  ];
  

  
  ngOnInit(): void {
  }
  selected() {
    console.log(this.selectedLevel)
  }
  getusers(){
    this.common.getusers(this.selectedLevel.id).subscribe((response:any)=>{
      console.log(response);
      this.allusers=response['data'];
      window.localStorage.setItem('users',JSON.stringify(this.allusers))
    })
  }
  // removeitem(){
  //   window.localStorage.removeItem('id')
  // }

}
