import { Keyboard, Platform } from "react-native";
import { DependencyList, useCallback, useEffect, useState } from "react";

const IS_IOS = Platform.OS === "ios";

interface KeyboardProps {
  readonly top: number;
  readonly show: boolean;
  readonly height: number;
  readonly dismiss: () => void;
}

export function useKeyboard(deps: DependencyList = []): KeyboardProps {
  const [show, setShow] = useState();
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  const showHandler = useCallback(({ endCoordinates }) => {
    setTop(endCoordinates.screenY);
    setHeight(endCoordinates.height);

    setShow(true);
  }, []);

  const hideHandler = useCallback(nativeEvent => {
    if (nativeEvent != null && nativeEvent.endCoordinates) {
      setTop(nativeEvent.endCoordinates.screenY);
      setHeight(nativeEvent.endCoordinates.height);
    } else {
      setTop(0);
      setHeight(0);
    }

    setShow(false);
  }, []);

  useEffect(() => {
    const keyboardShowEvent = IS_IOS ? "keyboardWillShow" : "keyboardDidShow";
    const keyboardHideEvent = IS_IOS ? "keyboardWillHide" : "keyboardDidHide";

    Keyboard.addListener(keyboardShowEvent, showHandler);
    Keyboard.addListener(keyboardHideEvent, hideHandler);

    return () => {
      Keyboard.removeListener(keyboardShowEvent, showHandler);
      Keyboard.removeListener(keyboardHideEvent, hideHandler);
    };
  }, deps);

  return {
    top,
    show,
    height,
    dismiss: Keyboard.dismiss,
  };
}
