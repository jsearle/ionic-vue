import {reactive, ref} from 'vue'
import {useStorage} from './storage'

const userToken = ref('')

export function useAPI(){
  const isLoadingData = ref(false)
  const usersData = reactive({users:[]})

  const fetchUsers = async () => {
    isLoadingData.value = true
    const results = await fetch("https://reqres.in/api/users")
    .then( (response) => {
        try{
          const res = response.json()
          return res
        } catch(e) {
          console.log(e)
          return []
        }
      }
    ).catch((error) => {
      console.error(error);
      return []
    });
    usersData.users = results.data
    isLoadingData.value = false
  }

  const doLogin = async (email:string, password:string) =>{
    isLoadingData.value = true
    const loginResult:any = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: email, // "eve.holt@reqres.in",
        password: password // "cityslicka"
      })
    }).then(response => response.json());
    console.log(loginResult)
    userToken.value = loginResult.token
    isLoadingData.value = false
    const storage = useStorage()
    storage.setToken(loginResult.token)
  }

  return {
    isLoadingData,
    usersData,
    fetchUsers,
    doLogin,
    userToken
  }
}