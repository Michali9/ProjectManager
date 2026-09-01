import React from 'react'
import type { Route } from '../../+types/root';


export function meta({}: Route.MetaArgs) {
  return [

    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub!" },
  ];
}


const HomePage = () => {
  return (
    <div>home</div>
  )
}

export default HomePage;