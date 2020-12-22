import React, { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    decrease?: boolean
}

export const CountButton = (props: Props) => {
    return (
        <button className="count__button">
            {props.decrease ? '-' : '+'}
        </button>
    )
}