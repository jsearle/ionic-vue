import { PushNotifications } from '@capacitor/push-notifications';
import { onMounted, ref } from 'vue'

export function useNotifications(){
  const userToken = ref('')

  const addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
      userToken.value = token.value
      // gestión para guardarlo en el storage y en el backend
    });
  
    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });
  
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
    });
  
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }

  const register = async () => {
    let permStatus = await PushNotifications.checkPermissions();
  
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
  
    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }
  
    await PushNotifications.register();
  }



  const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }

  onMounted(()=>{
    addListeners()
    //register()
  })

  return {
    register,
    userToken
  }
}


// foNWmElzSD6hkyjvxhCbDw:APA91bFmikUYfnlc08NyoUPMsORYW7TMNjy_UXaAWO5IxlkLgCJfmUr7gZU8qddngvRppvCpvnVoNKUA01DuA2ToKWTa5EbNmL7l0CHOJ58wqgmcN7XKSkipSAR_kXqeSOCIVAfU3XV4
