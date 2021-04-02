import useShoppingCart from '../../../hooks/useShoppingCart';
import styles from './styles.module.css';

const MyShoppingList = () => {
  const { shoppingCartList, totalCost } = useShoppingCart();

  return (
    <div className={styles.myShoppingList}>
      <h3 className={styles.myShoppingList__title}>Mis articulos</h3>
      <div className={styles.myShoppingList__content}>
        {shoppingCartList.length ? (
          <table className={styles.customTable}>
            <thead>
              <tr>
                <th className={styles.header__number}>#</th>
                <th>Nombre</th>
                <th className={styles.header__price}>Precio</th>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              {shoppingCartList.map((product) => (
                <tr key={product.id}>
                  <td className={styles.data__quantity}>{product.quantity}</td>
                  <td className={styles.data__name}>{product.name}</td>
                  <td className={styles.data__price}>
                    {(product.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan="2" className={styles.data__info}>
                  Total
                </td>
                <td className={styles.data__info}>S/ {totalCost}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className={styles.infoMessage}>
            <i className="fas fa-info-circle fa-3x"></i>
            Aun no haz añadido ningún articulo
          </div>
        )}
      </div>
    </div>
  );
};

export default MyShoppingList;
