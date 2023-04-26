import React from 'react'
import { Space, Spin } from 'antd'
import '../../Sass/common.scss'

export default function Loader() {
  return (
    <div className="loader">
      <p>Loading..Please wait..</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  )
}
