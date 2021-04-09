import useShoppingCart from '../../../hooks/useShoppingCart';
import useShoppingCartContext from '../../../hooks/useShoppingCartContext';
import InformationMessage from '../../shared/InformationMessage';
import styles from './styles.module.css';

const MyShoppingList = () => {
  const { shoppingCartList } = useShoppingCartContext();
  const { totalCost, deleteProduct } = useShoppingCart();

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
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody className={styles.table__body}>
              {shoppingCartList.map((product, index) => (
                <tr key={product.id}>
                  <td className={styles.data__quantity}>{product.cantidad}</td>
                  <td className={styles.data__name}>{product.nombre}</td>
                  <td className={styles.data__price}>
                    {(product.precio * product.cantidad).toFixed(2)}
                  </td>
                  <td className={styles.deleteButton}>
                    <button
                      type="button"
                      onClick={() => {
                        deleteProduct(index);
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan="2" className={styles.data__info}>
                  Total
                </td>
                <td colSpan="2" className={styles.data__info}>
                  S/ {totalCost}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <InformationMessage messageText="Aun no haz añadido ningún articulo" />
        )}
      </div>
    </div>
  );
};

export default MyShoppingList;
