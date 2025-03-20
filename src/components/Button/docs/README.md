# Button

Reusable button component with multiple variants and styles.

## Ukázka použití

```jsx
import { Button } from "@antixuser/antix-ui";

function MyComponent() {
  return (
    <Button
      variant="solid"
      color="primary"
      size="md"
      onClick={() => console.log("Button clicked!")}
    >
      Klikni na mě
    </Button>
  );
}
```

## API

Button komponenta přijímá následující props:

| Prop           | Typ                                      | Výchozí hodnota | Popis                                      |
| -------------- | ---------------------------------------- | --------------- | ------------------------------------------ |
| variant        | 'solid' \| 'outlined' \| 'text'          | 'solid'         | Varianta stylu tlačítka                    |
| color          | 'conversion' \| 'primary' \| 'secondary' | 'conversion'    | Barevné téma tlačítka                      |
| size           | 'xl' \| 'lg' \| 'md' \| 'sm'             | 'md'            | Velikost tlačítka                          |
| icon           | ReactNode                                | undefined       | Ikona k zobrazení uvnitř tlačítka          |
| iconPosition   | 'left' \| 'right'                        | 'left'          | Pozice ikony                               |
| fullWidth      | boolean                                  | false           | Zda má tlačítko zabírat celou šířku        |
| className      | string                                   | ''              | Dodatečná CSS třída                        |
| additionalText | string                                   | undefined       | Dodatečný text k zobrazení                 |
| minContent     | boolean                                  | true            | Zda má tlačítko mít minimální šířku obsahu |
| disabled       | boolean                                  | false           | Zda je tlačítko zakázáno                   |

Komponenta také přijímá všechny standardní HTML atributy pro tlačítko.

## Varianty

### Solid

```jsx
<Button variant="solid" color="primary">
  Solid Button
</Button>
```

### Outlined

```jsx
<Button variant="outlined" color="primary">
  Outlined Button
</Button>
```

### Text

```jsx
<Button variant="text" color="primary">
  Text Button
</Button>
```

## Velikosti

```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```
