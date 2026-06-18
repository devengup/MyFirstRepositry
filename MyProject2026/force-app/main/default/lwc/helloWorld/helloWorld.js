import { LightningElement } from 'lwc';
import { track } from 'lwc';
import { wire } from 'lwc';
import createContact from '@salesforce/apex/ContactController.createContact';
export default class HelloWorld extends LightningElement {
 greeting ='World !'
@wire(getRecords , { recordId: '$recordId' ,fields: ['Name', 'Email']}) accountRecord;                 
 changeHandler(event){
    this.greeting=event.target.value
 }
 createContactHandler(){

    createContact({firstName:accountRecord.data.Name
                    email:accountRecord.data.Email
    })
    .then(result=>{
        console.log('result===>',result)
    })
    .catch(error=>{
        console.log('error===>',error)
    })
}
}