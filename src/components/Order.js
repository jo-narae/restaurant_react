import React, { useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import SelectTablet from './order/SelectTablet';
import SelectCook from './order/SelectCook';
import SelectDish from './order/SelectDish';
import ConfirmOrder from './order/ConfirmOrder';
import ResultOrder from './order/ResultOrder';

import { TempOrderContext } from '../Contexts';
import '../css/order.css';


export default function Order (){
  const steps = ['테이블 선택', '요리사 선택', '메뉴 선택', '주문 확인', '주문 결과'];
  const {activeStep} = useContext(TempOrderContext)

  return(
    <>
      <h3>주문 하기</h3>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <SelectTablet />}
      {activeStep === 1 && <SelectCook />}
      {activeStep === 2 && <SelectDish />}
      {activeStep === 3 && <ConfirmOrder />}
      {activeStep === 4 && <ResultOrder />}
    </>
  )
}
