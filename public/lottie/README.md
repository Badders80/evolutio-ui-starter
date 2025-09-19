# Lottie Animations

Place Lottie JSON files here:

- `confetti.json`
- `loading-spinner.json`
- `success-checkmark.json`

## Usage

With react-lottie-player or similar:

```tsx
import Lottie from "react-lottie-player";
import confettiAnimation from "/lottie/confetti.json";

export function ConfettiAnimation() {
  return (
    <Lottie
      loop
      animationData={confettiAnimation}
      play
      style={{ width: 300, height: 300 }}
    />
  );
}
```

## Best Practices

- Keep JSON files small (< 100KB when possible)
- Optimize animations before export
- Consider CSS animations for simple effects