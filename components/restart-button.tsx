'use client'

import React from 'react'

export default function RestartButton() {
  return (
    <div className='text-center'>
      <button
        className='px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md border'
        onClick={() => window.location.reload()}
        type='button'
      >
        Restart
      </button>
    </div>
  )
}
