import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { AlertController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: UserPhoto[] = [];
  private platform: Platform;
  constructor(platform: Platform,public alertController: AlertController) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
    if(this.photos.length==1){
    this.presentAlertMultipleButtons()
    }
    
  }
  private async savePicture(photo: Photo) { }
  public async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Recuerda!!!!!!!!',
      subHeader: 'Gracias por usar nuestra Aplicación!',
      message: "Recuerda... Las fotografías que agregues serán presentadas en nuestra galería",
      buttons: [{
        text:"OK",
        handler: () => {
          console.log('Confirm Cancel');
        }
      }]
    });

    await alert.present();
  }
}
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
