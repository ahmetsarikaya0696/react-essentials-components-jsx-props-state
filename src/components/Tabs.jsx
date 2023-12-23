import React from "react";

export function Tabs({ children, buttons, ButtonsWrapper }) {
  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
}
