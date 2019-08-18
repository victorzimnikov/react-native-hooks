# react-native-hooks

> Hooks for React Native

### `useKeyboard`

```javascript
import { View, Button, TextInput } from "react-native";
import { useKeyboard } from "@victorzimnikov/react-native-hooks";

function KeyboardExample() {
  const keyboard = useKeyboard();

  return (
    <View>
      <Button title="Close" onPress={() => keyboard.dismiss()} />
      <TextInput />
    </View>
  );
}
```

---

### `useNativeRef`

```javascript
import { View, ScrollView, Button } from "react-native";
import { useNativeRef } from "@victorzimnikov/react-native-hooks"

function NativeRefExample() {
const scrollRef = useNativeRef<ScrollView>();

return (
  <View>
    <Button title="Scroll" onPress={() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 200 });
      }
    }} />

    <ScrollView ref={scrollRef} />
  </View>
);
}
```

---

### `useStatusBar`

```javascript
import { useStatusBar } from "@victorzimnikov/react-native-hooks";

function StatusBarExample() {
  useStatusBar({ backgroundColor: "green", barStyle: "light-content" });

  return null;
}
```

---

### `useBackHandler`

```javascript
import { withRouter, RouteComponentProps } from "react-router";
import { useBackHandler } from "@victorzimnikov/react-native-hooks";

const BackHandlerExample = withRouter(({ history }: RouteComponentProps<object>) => {
  useBackHandler({ onBack: () => history.goBack() });

  return null;
});
```
