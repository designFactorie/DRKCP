import { createContext, useContext } from 'react'

export const EnquiryContext = createContext(null)
export const useEnquiry = () => useContext(EnquiryContext)
