import React from 'react';
import { useParams } from 'react-router-dom'

const PageNewsDetail = () => {
  const params = useParams()
  console.log(params)
  return(
    <div>
      <h1>PageNewsDetail</h1>
      <h2>id:{params.id}</h2>
    </div>
  )
}
export default PageNewsDetail;