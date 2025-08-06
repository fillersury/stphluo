import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 text-slate-800 p-4">
        <span className="text-3xl sm:text-6xl mb-4 animate-bounce">🤖</span>
        <h1 className="text-3xl sm:text-6xl font-bold mb-4">404</h1>
        <p className="text-center text-sm sm:text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
            to="/"
            className="text-xs sm:text-base px-6 py-3 bg-red-500 text-white rounded hover:bg-red-300 transition"
        >
            Take Me Home
        </Link>
    </div>
  );
}
