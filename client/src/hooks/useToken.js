import axios from "axios"

const useToken = () => {

    const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(
        async (config) => {

            const response = await axios.get("http://localhost:3001/token", { withCredentials: true })

            config.headers.Authorization = `Bearer ${response.data.accessToken}`;

            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
    )
  
    return{axiosJWT}
}

export default useToken