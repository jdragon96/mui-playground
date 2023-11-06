import * as React from 'react';

import { Box, Button, Grid, Typography, ToggleButton, Radio } from "@mui/material";
import { styled } from '@mui/material/styles';
import * as prperty from "../shared/properties";

const sideBack = "#00000088";
const sideWidth = "250px";

// https://mui.com/material-ui/api/button/
const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const SideToggle = styled(ToggleButton)({

})

const SideRadio = styled(Radio)({

})



export function Sidebar1() {
  return (
    <>
      <Grid sx={{height: prperty.fullHeight, width: sideWidth, background: sideBack}}>
        <Typography sx={{height: "100px"}}>타이틀을 입력하세요</Typography>
        {/* <Button color="inherit" size="large" variant="outlined">테스트 버튼</Button>  */}
        <Box sx={{background: "#FFFFFF", height: "2px", width: sideWidth}}/>
        <StyledButton>테스트</StyledButton>
      </Grid>
    </>
  )
}