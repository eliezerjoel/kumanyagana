'use client'
import { signOut } from '@/auth'
import React from 'react'

const Logout = () => {
  return (
    <div
    onClick={() => signOut}>Logout</div>
  )
}

export default Logout