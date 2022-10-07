import { ReactElement } from 'react';

const Route = ({path, component}: {path: string, component: ReactElement}) => {
  return window.location.pathname === path ? component : null
}

export default Route