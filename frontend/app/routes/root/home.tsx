import React from 'react'
import type { Route } from '../../+types/root';
import { Sign } from 'crypto';
import SignIn from '../auth/sign-in';


export function meta({}: Route.MetaArgs) {
  return [

    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub!" },
  ];
}


const HomePage = () => {
  return (
    <>
    
    <SignIn />
    </>
  )
}

export default HomePage;