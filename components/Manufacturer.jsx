import React from 'react'

export default ({ id, name, country }) => (
  <div key={id}>{`${name} (${country})`}</div>)
