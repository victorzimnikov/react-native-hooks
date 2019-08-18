import { BackHandler } from "react-native";
import { useCallback, useEffect } from "react";

interface Props {
  readonly prevent?: boolean;
  readonly onBack?: () => void;
}

export function useBackHandler({ prevent = true, onBack }: Props = {}): void {
  const handleBackPress = useCallback(() => {
    if (onBack) {
      onBack();
    }

    return prevent;
  }, [prevent, onBack]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
}
