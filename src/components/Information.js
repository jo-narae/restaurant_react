import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CooksList, DishesList, TabletsList } from '../libs/api';
import { InfoContext } from '../Contexts';

import '../css/information.css';


export default function Information(){
  const {tablets,setTablets,cooks,setCooks,dishes,setDishes} = useContext(InfoContext);

  useEffect(()=>{
    (async function(){
      setTablets(await TabletsList());
      setCooks(await CooksList());
      setDishes(await DishesList());
    })();
  },[setTablets,setCooks,setDishes])

  return(
    <>
      <h3>타블렛 정보</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>위치</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tablets.map((tablet, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {tablet.id}
                </TableCell>
                <TableCell align="right">{tablet.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3>메뉴 정보</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>메뉴명</TableCell>
              <TableCell align="right">조리시간</TableCell>
              <TableCell align="right">가격</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dishes.map((dish, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {dish.id}
                </TableCell>
                <TableCell align="right">{dish.name}</TableCell>
                <TableCell align="right">{dish.cookingDuration}</TableCell>
                <TableCell align="right">{dish.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3>요리사 정보</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>이름</TableCell>
              <TableCell align="right">성</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cooks.map((cook, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {cook.id}
                </TableCell>
                <TableCell align="right">{cook.firstName}</TableCell>
                <TableCell align="right">{cook.lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}