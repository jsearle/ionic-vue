import { Geolocation, Position } from '@capacitor/geolocation'
import { reactive, ref } from 'vue'

// locationdata está en el scope de useGeo como dato global
const locationData = reactive({ pos:{} as any })
const GEOFENCE_DISTANCE = 100

export function useGeo(){
  let watcherId:any
  const geoFenceCoords = reactive({latitude:40.4483913, longitude:-3.782443})
  const isInGeofence = ref(false)

  const getPosition = async () => {
    const position = await Geolocation.getCurrentPosition()
    locationData.pos = position
    verfyGeoFencing(position)
    return position
  }

  const update = (position: Position | null) => {
    locationData.pos = position
    verfyGeoFencing(position)
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

  const verfyGeoFencing = (newPos: Position | null)=>{
    if (newPos){
      const distance = getDistance(newPos.coords.latitude, newPos.coords.longitude, geoFenceCoords.latitude, geoFenceCoords.longitude)
      console.log('distance', distance)
      if (distance <= GEOFENCE_DISTANCE){
        isInGeofence.value = true
      } else {
        isInGeofence.value = false
      }
    }
  }

  return {
    getPosition,
    startTracking,
    stopTracking,
    locationData,
    isInGeofence
  }
}

// get the distance in meters, given two coordinates
const getDistance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
  return d * 1000; // Distance in m
}

// convert deg to rad
const deg2rad = (deg:number) => {
  return deg * (Math.PI / 180);
}
