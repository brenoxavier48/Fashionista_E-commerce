import React, { useState, useEffect } from 'react'
import { IconButton } from '../ui/buttons'


type Props = {
  message: string,
  handleClickCloseButton: () => void,
  timeToRemove?: number,
}

const ModalSuccess = ({ message, handleClickCloseButton, timeToRemove }: Props) => {

  const [ isRemoved, setIsRemoved ] = useState<boolean>(false)

  useEffect(() => {
    if (typeof timeToRemove === 'number') {
      const setTimeoutId = setTimeout(() => {
        setIsRemoved(true)
      }, timeToRemove)

      return () => clearTimeout(setTimeoutId)
    }
  })

  return (
    <div className="modal-success-container">
      <article className={` modal-success-container__modal
        modal-success-container__modal--rendered
        ${ isRemoved ? 'modal-success-container__modal--removed' : '' }`}
      >
        <IconButton
          icon="close"
          onClick={handleClickCloseButton}
        />
        <div className="modal-success-container__modal__message">
          <p>
            { message }
          </p>
        </div>
      </article>
    </div>
  )
}

export default ModalSuccess