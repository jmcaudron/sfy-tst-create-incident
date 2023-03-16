import { LightningElement, api, wire } from "lwc";
import getAttachmentList from "@salesforce/apex/TST_INC_Ticket_Handler.getListOfAttachments";


 export default class TstAttachmentList extends LightningElement {
  @api recordid = "";
  attachments = [{Id : "001",Name :"filename.txt"},{Id : "002",Name :"filename2.txt"},{Id : "003",Title :"filename3.txt"}];
//TODO: retrieve label from standard object file
  fileLabel="File";

  /*@wire(getAttachmentList, { recordId: "$recordid" })
  wireGetAttachments(value) {
    console.log("@@@ wireGetAttachments- for id=" + this.recordid);
    console.log("@@@ wireGetAttachments- value=" + JSON.stringify(value));
    if (value.error) {
      this.attachments = null;
    } else {
      this.attachments = value.data;
    }
  }*/
  handleAttachment(event) {
    console.log("@@@ TstAttachmentList.handleAttachment event  " + JSON.stringify(event.detail));
    //this.dispatchEvent(event);
    this.dispatchEvent(new CustomEvent("notifyattachment", { detail: event.detail }));
  }
}