import SummaryApi from '@/common'
import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user : {},
    fetchUserDetails : async () => {
        await fetch(SummaryApi.UserDetail.url)
        .then(response => response.json())
        .then(data => set({user : data?.data}))
    }
}))
