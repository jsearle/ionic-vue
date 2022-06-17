import { Geolocation, Position } from '@capacitor/geolocation'
import { reactive } from 'vue'

// locationdata está en el scope de useGeo como dato global
const locationData = reactive({ pos:{} as any })
export function useGeo(){
  let watcherId:any

  const getPosition = async () => {
    const position = await Geolocation.getCurrentPosition()
    locationData.pos = position
    return position
  }

  const update = (position: Position | null) => {
    locationData.pos = position
  }

  const startTracking = async () => {
    const watchPositionOptions = {
      enableHighAccuracy: true,
      timeout: 1000,
    }
    watcherId = await Geolocation.watchPosition(watchPositionOptions, update)
  }

  const stopTracking = async () => {
    if(watcherId){
      Geolocation.clearWatch(watcherId)
    }
  }

  return {
    getPosition,
    startTracking,
    stopTracking,
    locationData
  }
}