import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollTop = () => {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
