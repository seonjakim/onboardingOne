import React, { Fragment } from 'react';

const Router = ({children}: {children: React.ReactNode | null}) => {
  return (
    <Fragment>{children}</Fragment>
  )
}

export default Router