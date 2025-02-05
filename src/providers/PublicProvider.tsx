"use client";
import { PropsWithChildren, useEffect, useState } from "react";

function PublicProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      window.location.href = "/";
    } else {
      setShow(true);
    }
  }, [token]);

  if (show) {
    return <>{children}</>;
  }

  return null;
}

export default PublicProvider;
