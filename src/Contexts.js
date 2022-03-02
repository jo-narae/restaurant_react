import {createContext, useState} from 'react'

export const InfoContext = createContext(null);
export const OrderContext = createContext(null);
export const TempOrderContext = createContext(null);


export default function ContextProvider({children}){
  const [tablets,setTablets] = useState([]);
  const [dishes,setDishes] = useState([]);
  const [cooks,setCooks] = useState([]);
  const infoContext = {tablets, setTablets, dishes, setDishes, cooks, setCooks}

  const [orders,setOrders] = useState([]);
  const [currentOrders,setCurrentOrders] = useState([]);
  const orderContext = {orders, setOrders, currentOrders, setCurrentOrders}

  const [activeStep,setActiveStep] = useState(0);
  const [tabletOrder,setTabletOrder] = useState({tabletId: null,tabletLocation: null})
  const [cookOrder,setCookOrder] = useState({cookId: null, cookName: null})
  const [dishesOrder,setDishesOrder] = useState({dishes: [], totalPrice: 0})
  const tempOrderContext = {activeStep, setActiveStep, tabletOrder, setTabletOrder,
                            cookOrder, setCookOrder, dishesOrder, setDishesOrder};

  return (
    <InfoContext.Provider value={infoContext}>
      <OrderContext.Provider value={orderContext}>
        <TempOrderContext.Provider value={tempOrderContext}>
          {children}
        </TempOrderContext.Provider>
      </OrderContext.Provider>
    </InfoContext.Provider>
  )
}