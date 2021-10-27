import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'reactstrap'
import Modal from 'react-modal'

import {removeEl} from '../store/action'


Modal.setAppElement('#root');
export default function Orders() {
    const [modal, setModal] = useState(false);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    let bill = 0;
    for(let i = 0; i < orders.length; i++){
        bill += orders[i].stoimost;
    }

    const remove = (index) =>{dispatch(removeEl(index))}

    const place = () =>(setModal(true))
    

    if(orders.length !== 0){
        return (
            <div className="order border">
                <div className="bordered">
                {
                    orders.map((el, index) =>{
                        return <div className="orderedDish" key={index}>
                            <span className="name">{el.name}  &times;  {el.count}</span>
                            <span>{el.stoimost}</span>
                            <Button onClick={() => remove(index)} color="danger">&times;</Button>
                        </div>
                    })
                }
                </div>
                <h3>
                    Доставка по городу 200 сом
                </h3>
                <div >
                    <div className="bill"><span>Общий счет:</span> <span className="number">{bill + 200}</span></div>
                    <Button onClick={place} className="classs" color="success">Заказать</Button>
                </div>

                <div className="Modal">
                    <Modal isOpen = {modal} >
                        <div>
                        <h1>Заказ</h1>
                        <div>
                            {
                                 orders.map((element) =>{
                                    return (
                                    <div key={element.stoimost1}>
                                         <span >{element.name} <span>{element.count}</span></span>
                                    </div>
                                     )
                                })
                            }
                        </div>
                        <div className="f-d">
                          <Button color="primary">Заказать!!!</Button>
                          <Button className="m-5" color="danger" onClick={() => setModal(false)}>Отмена</Button>
                        </div>
                        </div>
                    </Modal>
                </div>  
            </div> 
        )
    }else{
        return(
            <div className="start">
                <span className="sponge">Закажите что нибудь)))</span>
            </div>
        )
    }
}
