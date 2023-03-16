import { LightningElement, api } from "lwc";

export default class TstAttachmentTile extends LightningElement {
  @api attachment={Id : "001",Name :"filename.txt"};
  fileLabel="file";

  get label(){
    return (this.attachment.Title === null || this.attachment.Title === undefined) ? this.attachment.Name : this.attachment.Title;
  }
  handlechange(event) {
    console.log("@@@ TstAttachmentTile event checked " + JSON.stringify(event.detail.checked));
    this.dispatchEvent(
      new CustomEvent("notifyattachment", {
        detail: {
          id: this.attachment.Id,
          checked: event.detail.checked
        }
      })
    );
  }
}