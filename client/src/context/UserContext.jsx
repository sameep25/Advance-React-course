import React from 'react'
import { createContext ,useState} from 'react'

const UserContext = createContext(undefined) ;

 const UserProvider = ({children}) =>{

    const [user ,setUser] = useState("") ;
 }
