import React from 'react'

export default function ButtonComponent({
    handleClick,
    buttonText,
    disabled,
    width,
    type
}) {
  return (
    <button 
      className={`button-component ${type==='input' ? "input-type" : ''}`}
      onClick={handleClick} disabled={disabled}
      style={disabled ? (type!=='input' ? {background : 'grey'} : {opacity: '80%'} ) : {}}
    >
        {buttonText}
    </button>
  )
}

