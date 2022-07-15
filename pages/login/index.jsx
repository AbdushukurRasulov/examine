import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import InputPassword from '@/components/Forms/Inputs/InputPassword'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, reset, useAuthSelector } from 'store/slice/authSlice'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useAuthSelector()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      router.push('/')
      toast.success('Login Successful')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, router, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(login(formData))
  }

  return (
    <AppLayout>
      <AuthWrapper login>
        <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
          <div className="relative">
            <input
              onChange={onChange}
              name="email"
              type="email"
              className="h-11 w-full placeholder-gray-600"
              placeholder="Email"
            />
          </div>

          <InputPassword onChange={onChange} name="password" />

          <button
            type="submit"
            className="h-11 w-full rounded-md bg-primary leading-8 text-white md:h-12 lg:hover:bg-examine-purple-600"
          >
            {isLoading ? 'Loging In...' : 'Login'}
          </button>

          <Link href="/signup">
            <a className="mt-1 block rounded-md border border-dashed border-examine-green-700 bg-examine-green-500/10 bg-opacity-10 px-5 py-3.5 text-center text-sm text-examine-green-700 transition-colors duration-200 hover:bg-opacity-20 lg:px-11">
              <span className="block font-lora text-lg font-medium">Click here</span>
              to sign up for the complete Examine Membership. Includes a free 2 week trial!
            </a>
          </Link>
        </form>
      </AuthWrapper>
    </AppLayout>
  )
}

export default Login
