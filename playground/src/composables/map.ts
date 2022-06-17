import { onMounted, reactive, ref, watch }  from 'vue'
import { Loader } from '@googlemaps/js-api-loader';


export function useMaps(){
  let google:any, map:any;
  const mapCenter = reactive({coords: {lat: 40.352784, lng: -3.70061}, zoom: 12});
  const isLoaded = ref(false)
  const markers = reactive([] as any[]);


  const createMarker = (position:any)=>{
    const markerOptions: any = {
      map: map,
      position,
      icon : {
        path: 'M18 2c1.1 0 2 0.9 2 2l0 13c0 1.1-0.9 2-2 2l-4 0 -3 3 -3-3 -4 0c-1.1 0-2-0.9-2-2l0-13c0-1.1 0.9-2 2-2l14 0Zm-7 10.9l2.8 1.7 -0.7-3.2 2.5-2.1 -3.2-0.3 -1.3-3 -1.3 3 -3.2 0.3 2.5 2.1 -0.7 3.2 2.8-1.7Z',
        scale: 1.8,
        anchor: new google.maps.Point(11, 22),
        fillOpacity: 0.8,
        fillColor: '#c14e34',
        strokeOpacity: 0
      }
    }
    const newMarker = new google.maps.Marker(markerOptions)
    markers.push(newMarker);
  }
  
  const myPosition = (position:any)=>{
    const markerOptions: any = {
      map: map,
      position,
      icon : {
        path: 'M18 2c1.1 0 2 0.9 2 2l0 13c0 1.1-0.9 2-2 2l-4 0 -3 3 -3-3 -4 0c-1.1 0-2-0.9-2-2l0-13c0-1.1 0.9-2 2-2l14 0Zm-7 10.9l2.8 1.7 -0.7-3.2 2.5-2.1 -3.2-0.3 -1.3-3 -1.3 3 -3.2 0.3 2.5 2.1 -0.7 3.2 2.8-1.7Z',
        scale: 2,
        anchor: new google.maps.Point(11, 22),
        fillOpacity: 1,
        fillColor: '#ff0000',
        strokeOpacity: 0
      }
    }
    const newMarker = new google.maps.Marker(markerOptions)
    markers.push(newMarker);
  }
  
  
  const setCenter = (coords:any, zoom:number)=>{
    if (google == undefined) return;
    map.panTo({lat:coords.lat, lng:coords.lng})
    setTimeout(()=>{
      map.setZoom(zoom);
    }, 1000)
  }

  const createMap = (element:any, center:any, zoom:number) =>{
    //console.log(element, google, mapCenter.coords)
    mapCenter.coords = center;
    mapCenter.zoom = zoom;
    if (google == undefined) return;
    const opts:any = {
      center: center,
      zoom: zoom,
      styles: mapStyles,
      maxZoom: 20,
      minZoom: 0,
      mapTypeId: 'terrain',
      clickableIcons: true,
      disableDoubleClickZoom: false,
      draggable: true,
      keyboardShortcuts: true,
      scrollwheel: true,
    };
    //console.log(opts)
    map = new google.maps.Map(element, opts);
  }

  onMounted( async ()=>{
    const loader = new Loader({
      apiKey: 'AIzaSyDKtd8L97X6mEGTEIqyuZzj3m1mBNDAlgk',
      version: '3.31',
      libraries: ['places','geometry']
    });
    google = await loader.load()
    isLoaded.value = true;

    watch( mapCenter , (newVal:any, oldVal:any)=>{
      setCenter(newVal.coords, newVal.zoom)
    })
  })


  return {
    createMap,
    createMarker,
    mapCenter,
    markers,
    isLoaded,
    myPosition
  }

}

const mapStyles = [
  {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 40
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#4d6059"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#4d6059"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#4d6059"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#4d6059"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#4d6059"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7f8d89"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#7f8d89"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#7f8d89"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#2b3638"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2b3638"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#24282b"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#24282b"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  }
]