import React, { ButtonHTMLAttributes } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    decrease?: boolean
}

export const CountButton = ({ decrease, ...othersProps}: Props) => {
    return (
        <button
            className="count__button"
            {...othersProps}
        >
            {decrease ? <FaMinus/> : <FaPlus/>}
        </button>
    )
}