import React, { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
const Test = () => {
  const [test, setTest] = useState(null);
  const { getLang } = useMenu();
  
  console.log(test)
  return <div>Test</div>;
};

export default Test;
