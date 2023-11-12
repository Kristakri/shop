import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { Button, H } from "../../components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app.context";
import { priceRu } from "../../helpers/helpers";
import { ProductItem } from "../../interfaces";

export const Header = ({className, children, ...props}: HeaderProps):JSX.Element => {
  const { cartItem, setCart } = useContext(AppContext);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [amountCart, setAmountCart] = useState<number>(0);
  const [countCart, setCoutCart] = useState<number>(0);

  useEffect(() => {
    let amount = 0;
    if(cartItem && cartItem.length > 0) {
      cartItem.forEach(p => amount = p.price + amount);
      setCoutCart(cartItem.length);
    }
    setAmountCart(amount);
  }, [cartItem]);

  const deteteFromCart = (product: ProductItem) => {
    if(cartItem.includes(product)) {
      setCart && setCart(cartItem.filter((p) => p != product));
    }
  };

  return (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <H tag="h2"><a href="/" className={styles.logo}>SneakMax</a></H>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Подбор товара</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Наша команда</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка и оплата</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Контакты</a></li>
        <li className={cn(styles.menuItem, styles.cartContainer)}>
          <button className={styles.basket} onClick={() => setShowCart(s => !s)}>
            <span className="material-symbols-sharp">shopping_basket</span>
            {!!countCart && <span className={styles.cartCounter}>{countCart}</span>}
          </button>
          <div className={cn(styles.cart, {
            [styles.cartOpen]: showCart
          })}>
            {(cartItem && cartItem.length > 0) ? 
            <div>
              <ul className={styles.cartLits}>
                {cartItem.map(p => <li className={styles.cartItem}>
                  <img src={p.photos[0]} alt={p.name} />
                  <div>
                    <p>{p.name}</p>
                    <p className={styles.price}>{priceRu(p.price)}</p>
                  </div>
                  <button className={styles.cartDeleteButton} onClick={() => deteteFromCart(p)}>
                    <span className={cn("material-symbols-outlined", styles.cartDeleteIcon)}>delete</span>
                  </button>
                </li>)}
              </ul>
              <div className={styles.cartPanel}>
                <div className={styles.sum}>
                  <p>Итого:</p>
                  <p className={styles.price}>{priceRu(amountCart)}</p>
                </div>
                <Button>Сделать заказ</Button>
              </div>
            </div>: 
            <p className={styles.cartNothing}>Корзина пуста</p>}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  );
};