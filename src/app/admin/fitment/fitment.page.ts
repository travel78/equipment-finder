import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import { GetLocationPage } from '../get-location/get-location.page';

@Component({
    selector: 'app-fitment',
    templateUrl: './fitment.page.html',
    styleUrls: ['./fitment.page.scss'],
})
export class FitmentPage implements OnInit {
    public fitmentForm: FormGroup;
    public imageUrl: any;
    public location: any;
    public locationIsSet = false;

    constructor(private geolocation: Geolocation, private modalCtrl: ModalController, private camera: Camera) {
    }

    ngOnInit() {
        this.fitmentForm = new FormGroup({
            title: new FormControl(null, [Validators.required])
        });
    }

    public onTakePhoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }

    public async onOpenMap() {
        const modal = await this.modalCtrl.create({
            component: GetLocationPage,
            componentProps: {location: this.location, isSet: this.locationIsSet}
        });
        modal.onDidDismiss().then((res) => {
            if (res.data) {
                this.location = res.data.location;
                this.locationIsSet = true;
            }
        });

        return await modal.present();
    }

    public onLocate() {
        this.geolocation.getCurrentPosition().then((resp) => {
            const lat = resp.coords.latitude;
            const lng = resp.coords.longitude;
            this.location = {lat, lng};
            this.locationIsSet = true;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
}
