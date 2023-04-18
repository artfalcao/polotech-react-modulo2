import React from "react"

export type CheckboxProps = {
  checked: boolean,
  handleOnClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}