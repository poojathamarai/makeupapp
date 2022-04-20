import React from 'react';
import Grid from '@mui/material/Grid';

export function Home() {
  return (
    <Grid className="home-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <img src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" alt="" />
      </Grid>
      <Grid item xs={6}>
        <img src="https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png" alt="" />
      </Grid>
      <Grid item xs={6}>
        <img src="https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png" alt="" />
      </Grid>
      <Grid item xs={6}>
        <img src="https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png" alt="" />
      </Grid>
    </Grid>

    // <div className="home-container">
    //   <div className="image-container">
    //   <img src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" alt=""/>
    //   <img src="https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png" alt=""/>
    //   <img src="https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png" alt=""/>
    //   <img src="https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png" alt=""/>
    // </div>
    // </div>
  );
}
