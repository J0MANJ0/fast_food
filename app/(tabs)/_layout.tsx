import { Redirect, Slot } from 'expo-router';
import React from 'react';

const Layout = () => {
  const isAuth = false;

  if (!isAuth) return <Redirect href={'/sign-in'} />;
  return <Slot />;
};

export default Layout;
