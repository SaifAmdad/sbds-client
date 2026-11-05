"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function UnauthorizedToast() {
  useEffect(() => {
    toast.error("Unauthorized Access");
  }, []);

  return null;
}
