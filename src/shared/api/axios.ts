import axios, { CreateAxiosDefaults } from 'axios'

const getContentType = () => ({
  'Content-Type': 'application/json',
})

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: getContentType(),
  // withCredentials: true,
}

export const axiosBase = axios.create(options)
