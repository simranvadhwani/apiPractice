import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-local-storage',
  templateUrl: './value-local-storage.component.html',
  styleUrls: ['./value-local-storage.component.css']
})
export class ValueLocalStorageComponent implements OnInit {
  
  selectvalue:any;
  num:any=10;
  inputnum:any;
  getvalue:any;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
      // console.log(this.selectvalue);
      localStorage.setItem("value", JSON.stringify(this.num));
      this.num = JSON.parse(localStorage.getItem('value') || '[]');
      this.num = Number(this.num)
      this.selectvalue = Number(this.selectvalue)
      this.num = this.num + this.selectvalue
      console.log(this.num);
      localStorage.setItem("value",JSON.stringify(this.num));
  }
  update(){
    this.num = JSON.parse(localStorage.getItem('value') || '[]');
    this.selectvalue = Number(this.selectvalue)
    this.num = this.selectvalue
    localStorage.setItem("value",JSON.stringify(this.num))
  }
  delete(){
   JSON.parse(localStorage.getItem('value') || '[]');
   localStorage.removeItem('value')
    
  }
  get(){
   this.getvalue=JSON.parse(localStorage.getItem('value') || '[]')
   console.log(this.getvalue);
   
  }

}
