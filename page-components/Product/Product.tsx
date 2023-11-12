import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { H, Button } from "../../components";
import { useEffect, useState } from "react";

export const Product = ({product, opened, closeProduct}: ProductProps):JSX.Element => {
  const [zoomPhoto, setZoomPhoto] = useState<string>(product.photos[0]);
 
  useEffect(() => {
      setZoomPhoto(product.photos[0]);
  }, [product, opened]);

  return (
    <div className={cn(styles.productBackground, {
      [styles.productShow]: opened,
      [styles.productHide]: !opened
    })} onClick={() => closeProduct()}>
      <div className={styles.product} onClick={(e) => {e.stopPropagation();}}>
        <img src={zoomPhoto} alt={product.name} className={styles.productImg} />
        <div className={styles.productMainInfo}>
          <H tag="h3">{product.name}</H>
          <p>Выберите размер</p>
          <div className={styles.sizes}>
            {product.size.map(s => (
              <button key={s}>{s}</button>
            ))}
          </div>
          <p className={styles.price}>{product.price}</p>
          <Button className={styles.orderButton}>Заказать</Button>
        </div>
        <div className={styles.photos}>
          {product.photos.map(p => (
            <img src={p} alt={product.name} onClick={() => setZoomPhoto(p)} key={p} />
          ))}
        </div>
        <ul className={styles.advantages}>
          <li>Бесплатная доставка до двери</li>
          <li>Оплата заказа при получении</li>
          <li>Обмен в течение 2 недель</li>
        </ul>
        <div>
          <H tag="h3">Описание</H>
          <p>{product.description}</p>
        </div>
        <div>
          <H tag="h3">Характеристики</H>
          <p>Пол: {product.gender == 'male' ? "Мужской" : "Женский"}</p>
          <p>Цвет: {product.color}</p>
          <p>Состав: {product.composition?.map((c, key) => {
            if(key == 0) {
              return c;
            } else {
              return ", " + c;
            }})}
          </p>
          <p>Страна: {product.country}</p>
        </div>
      </div>
    </div>
  );
};