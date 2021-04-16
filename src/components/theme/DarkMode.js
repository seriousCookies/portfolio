import React, { useEffect, useState } from 'react';

const DarkModePreferredStatus = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    function handleDarkModePrefferedChange() {
      const doesMatch = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setPrefersDarkMode(doesMatch);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleDarkModePrefferedChange);

    // good house keeping to remove listener, good article here https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleDarkModePrefferedChange);
    };
  }, []);

  return prefersDarkMode;
};

const DarkMode = () => {
  const prefersDarkMode = DarkModePreferredStatus();

  return <div>{` Prefers Dark Mode = ${prefersDarkMode}. `}</div>;
};

export default DarkMode;
