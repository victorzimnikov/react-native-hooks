import { useEffect } from "react";
import { Platform, StatusBar, StatusBarAnimation, StatusBarStyle } from "react-native";

const IS_IOS = Platform.OS === "ios";

export interface AppStatusBarProps {
  hidden?: boolean;
  translucent?: boolean;
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  hideAnimation?: StatusBarAnimation;
}

export function useStatusBar({
  hidden = false,
  translucent = true,
  hideAnimation = "fade",
  barStyle = "dark-content",
  backgroundColor = "rgba(0, 0, 0, 0)",
}: AppStatusBarProps = {}) {
  useEffect(() => {
    StatusBar.setBarStyle(barStyle);
    StatusBar.setHidden(hidden, hideAnimation);

    if (!IS_IOS) {
      StatusBar.setTranslucent(translucent);
      StatusBar.setBackgroundColor(backgroundColor);
    }
  }, [hidden, translucent, hideAnimation, barStyle, backgroundColor]);
}
