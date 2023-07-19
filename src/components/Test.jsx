import React, { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
const Test = () => {
  const [test, setTest] = useState(null);
  const { locale } = useMenu();
  
  console.log(locale, "Test")
  return <div>Test</div>;
};

export default Test;
