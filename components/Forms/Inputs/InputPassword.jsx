import { useState } from 'react'

const InputPassword = ({ confirmPassword, onChange, name }) => {
  const [isHide, setIsHide] = useState(false)
  return (
    <div className="relative h-11 w-full">
      <input
        name={name}
        type={isHide ? 'text' : 'password'}
        className="h-full w-full placeholder-gray-600 "
        placeholder={confirmPassword ? 'Confirm Password' : 'Password'}
        onChange={onChange}
      />

      <span
        onClick={() => setIsHide(!isHide)}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xs font-bold uppercase tracking-wider text-examine-purple-600"
      >
        {isHide ? 'hide' : 'show'}
      </span>
    </div>
  )
}

export default InputPassword
