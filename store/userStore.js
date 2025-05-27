import SummaryApi from '@/common'
import axios from 'axios'
import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user : {},
    fetchUserDetails : async () => {
      await axios.get(SummaryApi.UserDetail.url)
      .then(data => set({user : data?.data}))
    }
}))
