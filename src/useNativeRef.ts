import React, { useRef } from "react";

export function useNativeRef<T = any>() {
  const { current: ref } = useRef(React.createRef<T>());

  return ref;
}
