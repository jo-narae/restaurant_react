import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { CooksList } from '../../libs/api';
import { InfoContext, TempOrderContext } from '../../Contexts'

import '../../css/order.css';


export default function SelectCook(){
  const {cooks, setCooks} = useContext(InfoContext)
  const {setCookOrder,setActiveStep} = useContext(TempOrderContext);

  const [selectId,setSelectId] = useState(null);

  useEffect(()=>{
    (async function(){
      setCooks(await CooksList());
    })();
  },[setCooks])

  const selectCookFunc = (id, name) => {
    setSelectId(id)
    setCookOrder({cookId: id, cookName: name});
  }

  function nextStep(selectId) {
    if (!selectId) {
      alert('요리사를 선택해주세요.');
      return;
    }
    setActiveStep(2);
  }

  return (
    <>
      <h4>요리사 선택</h4>
      <Grid container spacing={1}>
        {cooks.map(cook => (
          <Grid className={selectId === cook.id ? 'active' : ''} item xs={3} key={cook.id}>
            <Button onClick={selectCookFunc.bind(this, cook.id, cook.firstName + ' ' + cook.lastName)}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {cook.firstName} {cook.lastName}
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
