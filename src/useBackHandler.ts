import { BackHandler } from "react-native";
import { DependencyList, useCallback, useEffect } from "react";

interface Props {
  readonly prevent?: boolean;
  readonly onBack?: () => void;
}

export function useBackHandler(
  { prevent = true, onBack }: Props = {},
  deps: DependencyList = [],
): void {
  const handleBackPress = useCallback(() => {
    if (onBack) {
      onBack();
    }

    return prevent;
  }, deps.concat([prevent, onBack]));

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, deps);
}
