import { Camera, Photo, CameraResultType, CameraSource  } from '@capacitor/camera';
import {Filesystem, Directory } from '@capacitor/filesystem';
import {Capacitor} from '@capacitor/core';

export function useCamera(){

  const takePhoto = async ()=>{
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: false
    })
    return photo
  }

  const saveToDisk = async (photo: Photo) => {
    const decoded = await readAsBase64(photo)
    const newName = 'mifoto.jpg'
    const savedFile = await Filesystem.writeFile({
      path: newName,
      data: decoded,
      directory: Directory.Data
    })
    return savedFile
  }

  const getWebUrl = (file: string) => {
    return Capacitor.convertFileSrc(file)
  }


  const readAsBase64 = async(photo: Photo) => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
  
    return await convertBlobToBase64(blob) as string;
  }

  const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  return {
    takePhoto,
    saveToDisk,
    getWebUrl
  }
}