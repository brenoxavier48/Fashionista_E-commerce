import React from 'react'
import { IconButton } from '../ui/buttons'


type Props = {
  message: string
}

const ModalSuccess = ({ message }: Props) => {
  return (
    <div className="modal-success-container">
      <article className="modal-success-container__modal">
        <IconButton
          icon="close"
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