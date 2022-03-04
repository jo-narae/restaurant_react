import React, { useContext, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import { currentOrderList, orderChange, orderDelete } from '../libs/api';
import { OrderContext } from '../Contexts';

import '../css/management.css';

function ChangeButton(props){
  if(props.state === 'READY') {
    return (
      <Button variant="outlined" color="primary" onClick={()=>{props.orderStateChange(props.id, 'COOKING')}}>
        주문 승인
      </Button>
    )
  } else {
    return (
      <Button variant="outlined" color="primary" onClick={()=>{props.orderStateChange(props.id, 'PLACED')}}>
        주문 완료
      </Button>
    )
  }
}


export default function OrderManagement (){
  const {orders,setOrders} = useContext(OrderContext);

  useEffect(() => {
    (async function(){
      setOrders(await currentOrderList())
    })();
  },[setOrders])

  async function orderStateChange(id, state) {
    await orderChange(id, { state })
    .then(async () => {
      alert('정상적으로 처리되었습니다.');
      setOrders(await currentOrderList())
    })
    .catch(() => alert('정상적으로 처리되지 않았습니다. \n 다시 시도해주세요.'))
  }

  async function orderStateDelete(id) {
    await orderDelete(id)
    .then(async () => {
      alert('정상적으로 처리되었습니다.');
      setOrders(await currentOrderList())
    })
    .catch(() => alert('정상적으로 처리되지 않았습니다. \n 다시 시도해주세요.'))
  }

  return (
    <>
      <Grid container spacing={1}>
        {orders.map(order => (
          <Grid item xs={4} key={order.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  주문 번호 {order.id}
                </Typography>
                <Chip label={order.state} color="primary" />
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="h6" component="h2">
                  Cook : {order.cook.firstName}
                </Typography> <br />
                <Typography variant="h6" component="h2">
                Tablet : {order.tablet.location}
                </Typography>
              </CardContent>
              <CardContent>
                <List subheader={<ListSubheader>선택항목</ListSubheader>}>
                  {order.orderDishes.map((value) => {
                    return (
                      <ListItem key={value.id} role={undefined} dense button>
                        <ListItemText>
                          <Typography variant="h5" component="h2">
                            {value.dish.name}
                          </Typography>
                          <Typography variant="h5" component="h3">
                            ${value.dish.price}
                          </Typography>
                        </ListItemText>
                        <ListItemSecondaryAction edge="end">
                          <Typography variant="h5" component="h2">
                            { value.quantity }개
                          </Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
              <Divider />
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="outlined" color="secondary" onClick={orderStateDelete.bind(this, order.id)}>
                    주문 취소
                  </Button>
                </Grid>
                <Grid item>
                  <ChangeButton id={order.id} state={order.state} orderStateChange={orderStateChange.bind(this)} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
