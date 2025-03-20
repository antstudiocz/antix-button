# Antix UI Component Library

Znovupoužitelná a přizpůsobitelná knihovna UI komponent pro React aplikace.

## Instalace

```bash
npm install @antixuser/antix-ui
# nebo
yarn add @antixuser/antix-ui
```

## Základní použití

```jsx
import { Button } from "@antixuser/antix-ui";

function App() {
  return (
    <div>
      <Button
        variant="solid"
        color="primary"
        onClick={() => console.log("Button clicked!")}
      >
        Klikni na mě
      </Button>
    </div>
  );
}
```

## Dostupné komponenty

Knihovna aktuálně obsahuje následující komponenty:

- **[Button](src/components/Button/docs/README.md)** - Tlačítko s různými variantami a styly

## Přizpůsobení

Knihovna používá CSS proměnné pro snadné přizpůsobení vzhledu. Více informací najdete v [dokumentaci stylů](src/styles/docs/README.md).

## Příklady

Ukázkové příklady použití komponent najdete v adresáři `examples/`.

## Vývoj

### Struktura projektu

Projekt dodržuje následující strukturu:

```
src/
  ├── components/     # Jednotlivé komponenty
  │   ├── Component/  # Adresář komponenty
  │   │   ├── Component.tsx              # Implementace komponenty
  │   │   ├── Component.module.css       # Styly komponenty
  │   │   ├── Component.module.css.d.ts  # TypeScript definice pro CSS modul
  │   │   ├── index.ts                   # Export komponenty
  │   │   └── docs/                      # Dokumentace komponenty
  │   │       └── README.md              # Popis a příklady použití
  ├── styles/         # Sdílené styly
  │   ├── variables.css                  # CSS proměnné
  │   └── docs/                          # Dokumentace stylů
  └── types/          # Sdílené typy
      └── common.ts                      # Společné TypeScript typy
```

### Konvence

Pro více informací o konvencích a pravidlech projektu se podívejte do [souboru s pravidly projektu](.cursor/rules/instructions.mdc).

## Licence

MIT
