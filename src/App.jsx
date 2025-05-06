import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FallBack from './components/FallBack';
import SmoothGlowingCursor from './components/SmoothGlowingCursor';

const Landinglayout = lazy(() => import('./layouts/Landinglayout'));
const App = () => {
   const [showFallback, setShowFallback] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setShowFallback(false);
      }, 5000);
   }, []);
   return (
      <BrowserRouter>
         <SmoothGlowingCursor />
         {showFallback ? (
            <FallBack />
         ) : (
            <Suspense fallback={<FallBack />}>
               <Routes>
                  <Route path='/' element={<Landinglayout />} />
               </Routes>
            </Suspense>
         )}
      </BrowserRouter>
   );
};

export default App;
