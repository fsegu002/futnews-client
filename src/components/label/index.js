import React from 'react'
import './styles.scss'

export default function Label({title}) {
  return (
    <label className="label-component">
      <span>{title}</span>
    </label>
  )
}
