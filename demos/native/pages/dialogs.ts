import {IonicView, Dialogs} from 'ionic/ionic';


@IonicView({
  template: `
  <ion-navbar *navbar>
    <a menu-toggle>
      <icon menu></icon>
    </a>
    <ion-title>Dialogs</ion-title>
  </ion-navbar>
  <ion-content class="padding">
    <h2>Device</h2>
    <button primary outline (click)="doAlert()">Do Alert</button>
    <button primary outline (click)="doConfirm()">Do Confirm</button>
    <button primary outline (click)="doPrompt()">Do Prompt</button>
  </ion-content>
  `
})
export class DialogsPage {
  doAlert() {
    Dialogs.alert('Hello');
  }
  doConfirm() {
    Dialogs.confirm('Do you want to click that?').then((resp) => {
      console.log(resp);
    });
  }
  doPrompt() {
    Dialogs.prompt('What is your fav ice cream?').then((resp) => {
      console.log(resp);
    });
  }
}
