import React from 'react';

const Header = () => {
  return (
    <header className="w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50">Ratiba</h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
        A simple scheduling application.
      </p>
    </header>
  );
};

export default Header;
