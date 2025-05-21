import { FormInputData } from '@/types/types'
import React from 'react'

const InputField = ({ name, icon, type, value, onChange, placeholder }: FormInputData) => {
  return (
    <div className="relative">
      <input
        className="border p-2 w-full pl-8"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {name === 'username' && (
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          {icon ? icon : '@'}
        </div>
      )}
    </div>
  )
}

export default InputField