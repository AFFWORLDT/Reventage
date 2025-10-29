"use client"
import DetailsBlog from '@/src/view/blog/blogDetails'
import { useParams } from 'next/navigation'
import React from 'react'

function BlogDetails() {
    const params = useParams()
    const slug = params?.slug as string || ""
  return (
    <div><DetailsBlog slug={slug}/></div>
  )
}

export default BlogDetails