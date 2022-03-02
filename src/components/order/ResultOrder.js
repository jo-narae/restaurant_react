import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { TempOrderContext } from '../../Contexts';
import '../../css/order.css';


export default function ConfirmOrder(){
  const { setActiveStep } = useContext(TempOrderContext)

  async function initStep() {
    setActiveStep(0);
  }

  return (
    <>
      <h4>메뉴 확인</h4>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              성공적으로 주문이 완료되었습니다.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container className="mt40">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="outlined" color="primary" onClick={initStep.bind(this)}>
              초기화면
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}