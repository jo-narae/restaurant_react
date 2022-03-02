import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { TabletsList } from '../../libs/api';
import { InfoContext, TempOrderContext } from '../../Contexts'

import '../../css/order.css';

export default function SelectTablet(){
  const {tablets, setTablets} = useContext(InfoContext);
  const {setTabletOrder,setActiveStep} = useContext(TempOrderContext);

  const [selectId,setSelectId] = useState(null);

  useEffect(()=>{
    (async function(){
      setTablets(await TabletsList());
    })();
  },[setTablets])

  const selectTabletFunc = (id, location) => {
    setSelectId(id)
    setTabletOrder({tabletId: id, tabletLocation: location});
  }

  function nextStep(selectId) {
    if (!selectId) {
      alert('타블렛을 선택해주세요.');
      return;
    }
    setActiveStep(1);
  }

  return (
    <>
      <h4>타블렛 선택</h4>
      <Grid container spacing={1}>
        {tablets.map(tablet => (
          <Grid className={selectId === tablet.id ? 'active' : ''} item xs={3} key={tablet.id}>
            <Button onClick={selectTabletFunc.bind(this, tablet.id, tablet.location)}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {tablet.location}
                  </Typography>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container className="mt40">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="outlined">
              이전
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={nextStep.bind(this, selectId)}>
              다음
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}