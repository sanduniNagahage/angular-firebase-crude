import { Injectable } from '@angular/core';
import { AngularFireStore, AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  

  constructor(
    private firestore: AngularFirestore
  ) { }

  getPolicies(){
    return this.firestore.collection('policies').snapshotChanges();
  }

  createPolicies(policy : Policy){
    return this.firestore.collection('policies').add(policy);
  }

  updatePolicy(policy : Policy){
    delete policy.id;
    this.firestore.doc('policy/'+ policy.id).update(policy);
  }

 
}
