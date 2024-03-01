"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("81942a66-47b1-439c-962b-99ec8b4600a2");
  }, []);

  return null;
};
