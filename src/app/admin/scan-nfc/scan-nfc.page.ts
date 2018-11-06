import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
    selector: 'app-scan-nfc',
    templateUrl: './scan-nfc.page.html',
    styleUrls: ['./scan-nfc.page.scss'],
})
export class ScanNfcPage implements OnInit {

    constructor(private nfc: NFC, private ndef: Ndef) {
    }

    ngOnInit() {
        this.nfc.addNdefListener(() => {
            console.log('successfully attached ndef listener');
        }, (err) => {
            console.log('error attaching ndef listener', err);
        }).subscribe((event) => {
            console.log('received ndef message. the tag contains: ', event.tag);
            console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

        });
    }

}
