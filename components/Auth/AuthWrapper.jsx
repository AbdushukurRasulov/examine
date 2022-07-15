import React from 'react'
import SocialAuth from './SocialAuth'

const AuthWrapper = ({ login, children }) => {
  return (
    <div className="mx-auto w-full max-w-lg md:pb-60 md:pt-28 lg:max-w-[600px]">
      <div className="bg-white px-6 pt-8 pb-60 md:rounded-2xl md:p-15 md:py-8 md:shadow-form lg:p-19">
        <div className="mb-6 text-center md:mb-10">
          {login ? (
            <>
              <h2 className="font-lora font-medium">Welcome back! 👋</h2>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                Let&apos;s build something great
              </p>
            </>
          ) : (
            <>
              <h2 className="font-lora font-medium">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600 lg:text-base">
                It Includes a free 2 week trial!
              </p>
            </>
          )}
        </div>

        <SocialAuth />

        {children}
      </div>
    </div>
  )
}

export default AuthWrapper
