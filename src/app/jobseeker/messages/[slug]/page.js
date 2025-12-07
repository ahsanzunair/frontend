import React from 'react'

const page = async ({ params }) => {
  const { slug } = await params
  const message = await getMessage(slug)

  return (
    <div>
      <h1>message: {slug}</h1>
    </div>
  )
}

export default page