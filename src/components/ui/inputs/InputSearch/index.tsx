import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>

export const InputSearch = (props: Props) => {
  return (
    <div className="input-search__container">
      <input className="input-search__container__input" {...props}></input>
    </div>
  )
}