import { PushNotifications } from '@capacitor/push-notifications';
import { ref, reactive, onMounted } from 'vue';

export function usePushNotifications() {
  const pushToken = ref('')
  const last = reactive({notification:{} as any})

  const addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
      pushToken.value = token.value
    });
  
    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });
  
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
      last.notification = notification
    });
  
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
      last.notification = notification
    });
  }
  
  const registerNotifications = async () => {
    console.log('Notificaciones...');
// exl5mJopSoOWGiW18I05EL:APA91bFyyhGZCJB0OxGJ10yxXGhITAW_vLz6T_BSi149d_N-aduhOeWmHAk7THcMN_1LndLKcVEvvCFhTUkmZjZ3cT6ktKPyCInqPqvJFFYgNECQWXaUf-YcisncFqisJ5Z6NaLLQ-Lc
// exl5mJopSoOWGiW18I05EL:APA91bFyyhGZCJB0OxGJ10yxXGhITAW_vLz6T_BSi149d_N-aduhOeWmHAk7THcMN_1LndLKcVEvvCFhTUkmZjZ3cT6ktKPyCInqPqvJFFYgNECQWXaUf-YcisncFqisJ5Z6NaLLQ-Lc

    console.log('Permisos...');
    let permStatus = await PushNotifications.checkPermissions();
    console.log(permStatus);
  
    if (permStatus.receive === 'prompt') {
      console.log('Pidiendo...');
      permStatus = await PushNotifications.requestPermissions();
      console.log(permStatus);
    }
  
    if (permStatus.receive !== 'granted') {
      console.log('No pedidos!');
      throw new Error('User denied permissions!');
    }
    
    console.log('Register...');
    await PushNotifications.register();
  }
  
  const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
    if (notificationList){
      last.notification = notificationList
    }
  }

  onMounted (() => {
    addListeners()
  })

  return {
    addListeners,
    registerNotifications,
    getDeliveredNotifications,
    pushToken,
    last
  }
}
