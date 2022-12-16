import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { weatherobj } from "./store/tyreducer/reducer";
import { RootState } from "./store/store";

function App() {
  const { loading ,error, data  } : weatherobj = useSelector<RootState>((store) => store.bank ) 

  console.log(loading)
  return (
    <Box>
      <Heading> </Heading>
    </Box>
  );
}

export default App;
