import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
    selector: 'app-get-location',
    templateUrl: './get-location.page.html',
    styleUrls: ['./get-location.page.scss'],
})
export class GetLocationPage implements OnInit {
    public location: any;
    public marker: any;

    constructor(private navParams: NavParams, private modalCtrl: ModalController) {
        this.location = this.navParams.get('location');
        if (this.navParams.get('isSet')) {
            this.marker = this.location;
        }
    }

    ngOnInit() {
    }

    onSetMarker(event: any) {
        this.marker = {lat: event.coords.lat, lng: event.coords.lng};
    }

    onConfirm() {
        this.modalCtrl.dismiss({location: this.marker});
    }

    onAbort() {
        this.modalCtrl.dismiss();
    }
}
