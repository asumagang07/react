import React from 'react'
import cn from 'classnames'

function Button(props) {

const buttonCls = cn(
    ' flex items-center gap-2 text-sm rounded hover:bg-default-100 cursor-pointer',
    props.className
)

  return (
    <div className={buttonCls}>{props.children}</div>
  )
}

export default Button