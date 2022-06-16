import { Motion } from "@capacitor/motion";
import {reactive, onMounted} from 'vue'

export function useMotion(){
  const data = reactive({accel:{} as any, orientation:{} as any, gravity:{} as any})

  const update = (event:any) => {
    //console.log("Actualización", event)
    if (event.rotationRate){
      // alpha, beta, gamma
      data.orientation = event.rotationRate
    }
    if (event.acceleration && event.accelerationIncludingGravity){
      // x, y, z
      data.accel = event.acceleration
      data.gravity = event.accelerationIncludingGravity
    }
  }


  const startTracking = async() => {
    console.log("Tracking comenzado")
    await Motion.addListener('orientation', update)
    await Motion.addListener('accel', update)
  }
  const stopTracking = async() => {
    Motion.removeAllListeners()
  }

  onMounted(()=>{

    //
  })

  return {
    data,
    startTracking,
    stopTracking
  }
}