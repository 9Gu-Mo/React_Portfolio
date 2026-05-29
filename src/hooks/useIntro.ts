import { useEffect, useState } from 'react';

export function useIntro() {
  const [show, setShow] = useState(false); // 인트로 노출 상태값

  useEffect(() => {
    setShow(true);
  }, []);

  const disMiss = () => setShow(false);

  return { show, disMiss };
}
