import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "spa-pages/_index";
import About from "spa-pages/about";
import Me from "spa-pages/me";

export function SpaRoot() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  );
}
