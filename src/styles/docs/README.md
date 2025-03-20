# Přizpůsobení stylů

Komponenty používají CSS proměnné pro stylování, které můžete přepsat ve stylu vaší aplikace a přizpůsobit tak vzhled.

## CSS Proměnné

```css
:root {
  /* Velikosti písma */
  --font-button1-size: 16px;
  --font-button1-line-height: 24px;
  --font-button2-size: 14px;
  --font-button2-line-height: 20px;
  --font-button3-size: 12px;
  --font-button3-line-height: 16px;

  /* Rodiny písma */
  --font-secondary: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  /* Barvy */
  --color-neutral-00: #ffffff;

  --color-conversion-500: #e63d3d;
  --color-conversion-900: #b21a1a;

  --color-primary-500: #1c552c;
  --color-primary-700: #0e3f1b;

  --color-secondary-300: #f2ead8;

  --color-highlight-300: #72ad59;
}
```

## Příklad přizpůsobení

```css
/* Ve vašem CSS souboru */
:root {
  --color-primary-500: #3498db; /* Změna primární barvy na modrou */
  --font-button1-size: 18px; /* Zvětšení velikosti písma tlačítek */
}
```

## Responzivní přizpůsobení

Můžete také použít media queries pro přizpůsobení komponent na různých zařízeních:

```css
@media (max-width: 768px) {
  :root {
    --font-button1-size: 14px; /* Menší písmo na mobilních zařízeních */
  }
}
```
