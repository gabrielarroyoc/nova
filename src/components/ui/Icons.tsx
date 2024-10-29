import React from 'react'
import { Mail, Lock, User } from 'lucide-react'

export default function IconExample() {
  return (
    <div className="flex space-x-4">
      <Mail size={24} />
      <Lock size={24} />
      <User size={24} />
    </div>
  )
}