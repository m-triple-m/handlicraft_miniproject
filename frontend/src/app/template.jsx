'use client';
import React, { useEffect } from 'react'

const Template = ({children}) => {

    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.min.js')
    }, [])
    

  return (
    <>
    {children}
    </>
  )
}

export default Template;