import { useEffect, useState } from 'react';
import { Button } from './components';

import styles from './App.module.scss';

const themes = ['deimos-theme-one', 'deimos-theme-two'];

export const App = () => {
  const [theme, setTheme] = useState<string>(themes[0]);

  const switchTheme = () => {
    const newTheme = theme === themes[0] ? themes[1] : themes[0];
    setTheme(newTheme);
  };

  useEffect(() => {
    themes.map((t) => {
      document.body.classList.remove(t);
    });

    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <div className={styles.row}>
        <p>Current theme: {theme}</p>
        <Button onClick={switchTheme}>Switch Theme</Button>
      </div>
      <div className={styles.row}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="info">Info</Button>
        <Button variant="warrning">Warrning</Button>
        <Button variant="success">Warrning</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className={styles.row}>
        <Button size="small">Small</Button>
        <Button>Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
};
