import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";
import PlayerBar from "./playerBar";

const PlayerLayout = ({ Children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0"><Sidebar></Sidebar></Box>
      <Box marginLeft="250px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{Children}</Box>
      </Box>
      <Box left="0" bottom="0" position="absolute"><PlayerBar/></Box>
    </Box>
  );
};
export default PlayerLayout;
