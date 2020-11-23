import React from 'react';
import Link from 'next/link'

const IndexPage = () => {
  return (
    <>
      <h1>Hello Next.js leon 👋</h1>
      <p>
        <Link href="/dashboard">
          <a>dashboard</a>
        </Link>
      </p>
      <p>
        <Link href="/client">
          <a>client</a>
        </Link>
      </p>
    </>
  )
}

export default IndexPage
