import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from "@mui/material";



function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Slider />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
