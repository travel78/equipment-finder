import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

import { ScanNfcPage } from './scan-nfc.page';

const routes: Routes = [
    {
        path: '',
        component: ScanNfcPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ScanNfcPage],
    providers: [
        NFC,
        Ndef
    ]
})
export class ScanNfcPageModule {
}
