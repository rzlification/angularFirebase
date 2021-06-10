import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  createEmployee(record){
    return this.fireservices.collection('Employee').add(record);
  }

  getAllEmployee(){
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  updateEmployee(recordid, record){
    this.fireservices.doc('Employee/' + recordid).update(record);
  }

  deleteEmployee(recordid){
    this.fireservices.doc('Employee/' + recordid).delete();
  }

}
