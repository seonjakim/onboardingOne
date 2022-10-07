import React, { Fragment } from 'react';

const Router = ({children}: {children: React.ReactNode}) => {
  return (
    <Fragment>{children}</Fragment>
  )
}

export default Router