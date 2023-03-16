import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import App from "./app";
import TstAttachmentTileApp from "./tstAttachmentTile"
import TstAttachmentListApp from "./tstAttachmentList"

//export const story = () => createElement("c-app", { is: App });

//export const story = () => createElement("c-tst-attachment-tile", { is: TstAttachmentTile });
export const AttachmentTile = () => TstAttachmentTileApp;
AttachmentTile.storyName = "Attachment";

export const AttachmentList = () => TstAttachmentListApp;
AttachmentList.storyName = "Attachment List";

