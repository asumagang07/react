import React from 'react'
import cn from 'classnames'

function Button(props) {

const buttonCls = cn(
    ' flex ites-center gap-2 text-sm rounded hover:bg-secondary-100 cursor-pointer',
    props.className
)

  return (
    <div className={buttonCls}>{props.children}</div>
  )
}

export default Button