import React from 'react';
import classes from "./ShoppingCart.module.css";
import png1 from "./icons/fashion-shoes-sneakers 1.svg"
import png2 from "./icons/fashion-shoes-sneakers 2.svg"
import icon_color1 from "./icons/Ellipse_white.svg"
import icon_color2 from "./icons/Ellipse_balck.svg"
import icon_basket1 from "./icons/basket_icon_Gray.svg"
import icon_basket2 from "./icons/basket_icon.svg"
import Button from '@mui/material/Button';
import {useState} from "react";


function ShoppingCart(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={classes.mainBlock}>
                <div className={classes.leftBlock}>
                    <div className={classes.cartItem}>
                        <div className={classes.cartItem1}>
                            <img src={png1} alt="Sneakers"/>
                            <div className={classes.title}>
                                <h4>Кроссовки</h4>
                                <b>Nike Air Max 27</b>
                                <p><strong>Цвет</strong></p>
                                <img src={icon_color1} alt="Color"/>
                                <p><strong>Размер: 40</strong></p>
                            </div>
                        </div>
                        <div className={classes.counter}>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count - 1)}>-</button>
                            </div>
                            <h1 className={classes.count}>{count}</h1>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className={classes.price}>
                            <b>8500 c</b>
                        </div>
                        <img src={icon_basket1} alt="Basket"/>
                    </div>


                    <div className={classes.cartItemSecond}>
                        <div className={classes.cartItem1}>
                            <img src={png2} alt="Sneakers"/>
                            <div className={classes.title}>
                                <h4>Кроссовки</h4>
                                <b>Adidas Nova</b>
                                <p><strong>Цвет</strong></p>
                                <img src={icon_color2} alt="Color"/>
                                <p><strong>Размер: 40</strong></p>
                            </div>
                        </div>
                        <div className={classes.counter}>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count - 1)}>-</button>
                            </div>
                            <h1 className={classes.count}>{count}</h1>
                            <div className={classes.button__wrapper}>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className={classes.price}>
                            <b>8500 c</b>
                        </div>
                        <img className={classes.basket} src={icon_basket1} alt="Basket"/>
                    </div>

                    <div className={classes.clearBasket}>
                        <img src={icon_basket2} alt=""/>
                        <h4>ОЧИСТИТЬ КОРЗИНУ</h4>
                    </div>
                </div>
                <div className={classes.rightBlock}>
                    <h4 className={classes.title_right}>Промокод</h4>
                    <input className={classes.input} placeholder="Введите промокод"></input>
                    <div className={classes.title_right1}>
                        Количество товаров
                        <b>2 шт.</b>
                    </div>
                    <div className={classes.title_right2}>
                        <p>Итого :</p>
                        <b>17000 с</b>
                    </div>
                    <Button variant="contained" disableElevation sx={{background: "#006195", marginLeft: 11, marginTop: 5}}>
                        Перейти к оформлению
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;