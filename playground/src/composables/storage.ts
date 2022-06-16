import {Storage} from '@capacitor/storage'
import {reactive, onMounted} from 'vue'

const datos = reactive({
  dato1:'',
  dato2:'',
  token: ''
})

export function useStorage(){
  const setDatos = (newDato1:string, newDato2:string) => {
    datos.dato1 = newDato1
    datos.dato2 = newDato2
    Storage.set({ key: "dato1", value: newDato1 });
    Storage.set({ key: "dato2", value: newDato2 });
    console.log('storage actualizado')
  }

  const getDatos = async () => {
    const resultado1 = await Storage.get({ key: "dato1" });
    const resultado2 = await Storage.get({ key: "dato2" });
    setTimeout(()=>{
      datos.dato1 = resultado1.value as string;
      datos.dato2 = resultado2.value as string;
    }, 1000)
  }

  const setToken = async (newToken:string) => {
    await Storage.set({ key: "token", value: newToken });
    datos.token = newToken
    console.log('token guardado en el storage')
  }

  onMounted(getDatos)

  return{
    datos,
    setDatos,
    getDatos,
    setToken
  }
}