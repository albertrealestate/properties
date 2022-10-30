import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(private afs: AngularFirestore) { }


  async getPropriete(isVendre : boolean) : Promise<any>{

    return new Promise((resolve, reject) => {
      try{
        this.afs
          .collection("propriete",  ref => ref.where('isVendre', '==', isVendre).orderBy("prix", "desc"))
          .get()
          .subscribe((data) => {
            resolve(data);
          })
      }catch(error){
        console.error("Error retrieving data : ", error);
        reject();
      }
    });

  }

  
  savePropriete(prop : any) {
    this.afs.collection("propriete").add(prop);
  }


}
