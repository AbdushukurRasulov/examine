import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import InputPassword from '@/components/Forms/Inputs/InputPassword'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { register, reset, useAuthSelector } from 'store/slice/authSlice'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useAuthSelector()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      toast.success('Signup Successful')
      router.push('/')
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

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
      dispatch(register(userData))
    }
  }

  return (
    <AppLayout>
      <AuthWrapper>
        <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
          <div className="relative">
            <input
              onChange={onChange}
              type="text"
              className="h-11 w-full placeholder-gray-600"
              placeholder="Full Name"
              name="name"
            />
          </div>
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
          <InputPassword confirmPassword={true} onChange={onChange} name="confirmPassword" />
          <button
            type="submit"
            className="h-11 w-full rounded-md bg-primary leading-8 text-white md:h-12 lg:hover:bg-examine-purple-600"
          >
            {isLoading ? 'Signing Up...' : ' Start your 2-week free trial!'}
          </button>

          <div className="text-center text-sm md:text-base">
            <p className="mt-5 text-primary">
              Already have an account?
              <span className="block">
                <Link href="/login">
                  <a className="font-lora text-lg font-medium hover:underline">Sign in</a>
                </Link>
              </span>
            </p>
          </div>
        </form>
      </AuthWrapper>
    </AppLayout>
  )
}

export default Signup
