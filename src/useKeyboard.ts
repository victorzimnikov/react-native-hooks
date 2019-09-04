import { Keyboard } from "react-native";
import { useEffect, useState } from "react";

interface KeyboardProps {
  readonly top: number;
  readonly show: boolean;
  readonly height: number;
  readonly dismiss: () => void;
}

export function useKeyboard(deps: any[] = []): KeyboardProps {
  const [show, setShow] = useState();
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", ({ endCoordinates }) => {
      setTop(endCoordinates.screenY);
      setHeight(endCoordinates.height);

      setShow(true);
    });
    Keyboard.addListener("keyboardDidHide", nativeEvent => {
      if (nativeEvent != null && nativeEvent.endCoordinates) {
        setTop(nativeEvent.endCoordinates.screenY);
        setHeight(nativeEvent.endCoordinates.height);
      }

      setShow(false);
    });

    return () => {
      Keyboard.removeListener("keyboardDidShow", () => {});
      Keyboard.removeListener("keyboardDidHide", () => {});
    };
  }, deps);

  return {
    top,
    show,
    height,
    dismiss: Keyboard.dismiss,
  };
}
