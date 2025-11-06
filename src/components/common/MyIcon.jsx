import { Award, BookText, Clock4, User, Users2,Users } from 'lucide-react'
import React from 'react'
 
const MyIcon = ({iconName}) => { 
      const statIcons = {
    "User":<User className='text-primaryCustom h-5 w-5' />,  
    "Users":<Users className='text-primaryCustom h-5 w-5 ' />,
    "Award":<Award className='text-primaryCustom h-5 w-5'  />, 
    "Clock4":<Clock4 className='text-primaryCustom h-5 w-5' />, 
    "BookText":<BookText className='text-primaryCustom h-5 w-5' />, 
    "Users2":<Users2 className='text-primaryCustom h-5 w-5' />
  } 
  return (
    statIcons[iconName]
  )
}

export default MyIcon