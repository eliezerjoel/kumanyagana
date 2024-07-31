'use client'
import { signIn } from '@/auth'
import React from 'react'

const Login = () => {
  return (
    <div
    onClick={() => signIn}>Login</div>
  )
}

export default Login