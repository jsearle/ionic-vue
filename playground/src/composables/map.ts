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
        fillOpacity: 1,
        fillColor: '#c14e34',
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
    if (google == undefined) return;
    const opts:any = {
      center: center,
      zoom: zoom,
      styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"poi.business","elementType":"all","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"poi.government","elementType":"all","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","elementType":"all","stylers":[{"color":"#a95521"},{"lightness":35}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"color":"#9e5916"},{"lightness":32}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{"featureType":"transit","elementType":"all","stylers":[{"lightness":38}]},{"featureType":"transit.line","elementType":"all","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]}],
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
    console.log(map)
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
  }

}