import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Background from '../Background/Background';
import Hero from '../Hero_Section/Hero';
const Layout = () => {
  return (
    <div>
    <Navigation />
    <Background />
    <Hero />
    </div>
  )
}
export default Layout
