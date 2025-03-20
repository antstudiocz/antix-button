# Příklady použití Antix UI komponent

Tato složka obsahuje ukázkové komponenty, které prezentují všechny možné varianty a způsoby použití Antix UI komponent.

## Struktura příkladů

- **Button/** - Ukázky všech variant tlačítek
- **styles/** - Ukázky přizpůsobení vzhledu pomocí CSS proměnných
- **ExamplesApp.tsx** - Hlavní aplikace, která sdružuje všechny příklady do jednoho rozhraní

## Jak spustit ukázky

### Možnost 1: Použití TypeScript + React prostředí

Zkopírujte komponenty do vašeho React projektu a importujte je:

```jsx
import ExamplesApp from "./path/to/examples/ExamplesApp";

function App() {
  return <ExamplesApp />;
}
```

### Možnost 2: Zobrazení jednotlivých ukázek

Každou ukázkovou komponentu můžete použít samostatně:

```jsx
import ButtonVariantsDemo from "./path/to/examples/Button/ButtonVariantsDemo";

function App() {
  return <ButtonVariantsDemo />;
}
```

## Co příklady demonstrují

### Button (Tlačítko)

- Všechny varianty: solid, outlined, text
- Všechny barevné motivy: conversion, primary, secondary
- Všechny velikosti: xl, lg, md, sm
- S ikonou i bez ikony
- Různé pozice ikon

### Customization (Přizpůsobení)

- Ukázka změny vzhledu pomocí CSS proměnných
- Implementace různých barevných schémat a témat
- Dynamické přepínání mezi tématy
