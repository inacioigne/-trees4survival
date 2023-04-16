import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'https://repositorio.inpa.gov.br/rest'

})

export default api