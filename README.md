# Wix Button Component

A reusable and customizable button component for React applications.

## Installation

```bash
npm install antix-button
# or
yarn add antix-button
```

## Usage

```jsx
import { Button } from "antix-button";
import "antix-button/dist/index.css"; // Import styles if needed

function App() {
  return (
    <Button
      variant="solid"
      color="primary"
      size="md"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </Button>
  );
}
```

Check the `examples` directory for these demos and more information on how to run them.

## API

The Button component accepts the following props:

| Prop           | Type                                     | Default      | Description                                          |
| -------------- | ---------------------------------------- | ------------ | ---------------------------------------------------- |
| variant        | 'solid' \| 'outlined' \| 'text'          | 'solid'      | Button style variant                                 |
| color          | 'conversion' \| 'primary' \| 'secondary' | 'conversion' | Button color theme                                   |
| size           | 'xl' \| 'lg' \| 'md' \| 'sm'             | 'md'         | Button size                                          |
| icon           | ReactNode                                | undefined    | Icon to display within button                        |
| iconPosition   | 'left' \| 'right'                        | 'left'       | Position of the icon                                 |
| fullWidth      | boolean                                  | false        | Whether the button should take full width            |
| className      | string                                   | ''           | Additional CSS class                                 |
| additionalText | string                                   | undefined    | Additional text to display                           |
| minContent     | boolean                                  | true         | Whether the button should have minimum content width |
| disabled       | boolean                                  | false        | Whether the button is disabled                       |

The component also accepts all standard HTML button attributes.

## Customization

The component uses CSS variables for styling, which you can override in your application's CSS to customize the appearance:

```css
:root {
  /* Font sizes */
  --font-button1-size: 16px;
  --font-button1-line-height: 24px;
  --font-button2-size: 14px;
  --font-button2-line-height: 20px;
  --font-button3-size: 12px;
  --font-button3-line-height: 16px;

  /* Font families */
  --font-secondary: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  /* Colors */
  --color-neutral-00: #ffffff;

  --color-conversion-500: #e63d3d;
  --color-conversion-900: #b21a1a;

  --color-primary-500: #1c552c;
  --color-primary-700: #0e3f1b;

  --color-secondary-300: #f2ead8;

  --color-highlight-300: #72ad59;
}
```

## License

MIT
