import { CatalogProps } from "./Catalog.props";
import styles from "./Catalog.module.css";
import cn from "classnames";
import { H, Button, Range } from "../../components";
import { priceRu } from "../../helpers/helpers";
import { useState, useEffect, useContext } from "react";
import { ProductItem } from "../../interfaces";
import { AppContext } from "../../context/app.context";
import { Gender } from "../../interfaces/gender.interface";
import { RangePrice } from "../../interfaces/rangePrice.interface";

export const Catalog = ({products, openProduct}: CatalogProps):JSX.Element => {
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];
  const [activeSizes, setActiveSizes] = useState<number[]>([]);

  const [filterGender, setFilterGender] = useState<Gender>({male: false, female: false});

  const [rangePrice, setRangePrice] = useState<RangePrice>({min: 0, max: 30000});

  const [countProduct, setCountProduct] = useState<number>(6);
  const [currentProduct, setCurrentProduct] = useState<ProductItem[]>(products);
  const [displayProduct, setDisplayProduct] = useState<ProductItem[]>(currentProduct);

  const { cartItem, setCart } = useContext(AppContext);

  useEffect(() => {
    currentProduct && setDisplayProduct([...currentProduct].slice(0, countProduct));
  }, [countProduct, currentProduct]);

  const updateSizes = (changeSize: number) => {
    if(activeSizes.includes(changeSize)) {
      setActiveSizes(size => size.filter((s) => s != changeSize));
    } else {
      setActiveSizes(size => [...size, changeSize]);
    }
  };

  const sortProduct = () => {
    setCurrentProduct([...products].filter(p => {
      
      const intersection = p.size.filter(s => activeSizes.includes(s));

      let isGender = false;
      if((!filterGender.male && !filterGender.female) ||
        (p.gender == "male" && filterGender.male) || 
        (p.gender == "female" && filterGender.female)) {
        isGender = true;
      }

      if((intersection.length > 0  || activeSizes.length < 1) && 
        isGender &&
        p.price >= rangePrice.min && 
        p.price <= rangePrice.max) 
          return true;
    }));
    console.log(currentProduct);
  };

  const addToCart = (product: ProductItem) => {
    if(!cartItem.includes(product))
      setCart && setCart([...cartItem, product]);
  };

  return (
    <section className={styles.catalog}>
      <H tag="h2">Каталог</H>
      <div className={styles.catalogGrig}>
        <div className={styles.filter}>
          <H tag="h3">Подбор по параметрам</H>
          <div>
            <p>Цена, руб</p>
            <Range range={rangePrice} setRange={setRangePrice}/>
            <p>Пол</p>
            <div className={styles.genderContainer}>
              <input type="checkbox" id="maleCheckbox" 
              className={styles.genderCheckbox} onChange={() => setFilterGender(g => {
                g.male = !g.male;
                return g;
              })} />
              <label htmlFor="maleCheckbox" className={styles.genderLabel}>мужской</label>
              <input type="checkbox" id="femailCheckbox" 
              className={styles.genderCheckbox} onChange={() => setFilterGender(g => {
                g.female = !g.female;
                return g;
              })}/>
              <label htmlFor="femailCheckbox" className={styles.genderLabel}>женский</label>
            </div>
            <p>Размер</p>
            <div className={styles.sizeBox}>
              {sizes.map(s => (
                <button key={s} onClick={() => updateSizes(s)} className={cn(styles.sizeButton, {
                  [styles.sizeActive]: activeSizes.includes(s)
                })}>{s}</button>
              ))}
            </div>
            <Button appearance="gray" className={styles.filterButton} onClick={() => sortProduct()}>Применить</Button>
          </div>
        </div>
        <div className={styles.products}>
          <ul className={styles.productsList}>
            {displayProduct && displayProduct.map(product => {
                return (
                <li className={styles.product} key={product.id}>
                  <div className={styles.productAction}>
                    <button onClick={() => openProduct(product.id)}><span className={cn('material-symbols-outlined', styles.productIcon)}>visibility</span></button>
                    <button onClick={() => addToCart(product)}><span className={cn('material-symbols-outlined', styles.productIcon)}>shopping_basket</span></button>
                  </div>
                  <img src={product.photos[0]} alt={product.name} className={styles.productPhoto} />
                  <p>{product.name}</p>
                  <span className="price">{priceRu(product.price)}</span>
                </li>
                );
            })}
          </ul>
          <Button className={styles.productsButton} onClick={() => setCountProduct(countProduct + 6)} >Показать ещё</Button>
        </div>
      </div>
    </section>
  );
};