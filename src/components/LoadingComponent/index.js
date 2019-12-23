import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Loading } from './styles';

const LoadingComponent = () => (
  <Loading>
    <FaSpinner size={30} color="#39BD8E" />
  </Loading>
);

export default LoadingComponent;
