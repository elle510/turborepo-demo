import { useCallback, useState } from "react";

const useTest = (initValue: string): [string, (val: string) => void] => {
  const [value, setValue] = useState<string>(initValue);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return [value, onChange];
};

export default useTest;
