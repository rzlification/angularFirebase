import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employee: any;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message:string;

  constructor(public crudService:CrudService) {}

  ngOnInit() {
    this.crudService.getAllEmployee().subscribe(data => {
      this.employee = data.map(e =>{
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address']
        };
      })
      console.log(this.employee )
    })
  }

  createRecord(){
    // alert("form is submit!");
    let record = {};
    record['name'] = this.employeeName;
    record['age'] = this.employeeAge;
    record['address'] = this.employeeAddress;

    this.crudService.createEmployee(record).then(res=>{
      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAddress = "";
      console.log(res);
      // setTimeout(() => { 
        this.message="Employee is recorded"
      // }, 2000);
    }).catch(error => {
      console.log(error);
    })
  }

  editRecord(record){
    record.isedit = true;
    record.editname = record.name;
    record.editage = record.age;
    record.editaddress = record.address;
  }

  updateRecord(record){
    let _record = {};
    _record['name'] = record.editname;
    _record['age'] = record.editage;
    _record['address'] = record.editaddress;
    this.crudService.updateEmployee(record.id, _record);
    record.isedit = false;
  }

  deleteEmployee(record_id){
    this.crudService.deleteEmployee(record_id);
  }

}
