import Link from 'next/link'
import React from 'react'

const Btn = ({className = "", path="", content="Default"}) => {
  return (
    <Link href={path} className={className}> {content}</Link>
  )
}

export default Btn