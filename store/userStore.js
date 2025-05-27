import SummaryApi from '@/common'
import axios from 'axios'
import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user : {},
    fetchUserDetails : async () => {
     const {data} = await axios.get(SummaryApi.UserDetail.url)
       set({user : data?.data})
    }
}))
