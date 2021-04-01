import {
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import useShoppingCart from '../../../hooks/useShoppingCart';
import styles from './styles.module.css';

const MyProducts = () => {
  const { shoppingCartList, totalCost } = useShoppingCart();

  return (
    <div className={styles.myProducts}>
      <Table variant="simple">
        <TableCaption placement="top" fontSize="1.5rem" fontWeight="bold">
          Orden
        </TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="1.1rem" textAlign="right">
              Nº
            </Th>
            <Th fontSize="1.1rem">Producto</Th>
            <Th isNumeric fontSize="1.1rem" minWidth="14ch">
              Precio
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {shoppingCartList.map(({ id, name, price, quantity }) => (
            <Tr key={id}>
              <Td textAlign="right">{quantity}</Td>
              <Td>{name}</Td>
              <Td isNumeric>S/ {(price * quantity).toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {/* <Tr>
            <Th textAlign="end" fontSize="1.2rem"></Th>
            <Th textAlign="end" fontSize="1.2rem">
              IGV
            </Th>
            <Th isNumeric fontSize="1.2rem">
              S/ 45.00
            </Th>
          </Tr> */}
          <Tr>
            <Th textAlign="end"></Th>
            <Th textAlign="end" fontSize="1.1rem">
              Total
            </Th>
            <Th isNumeric fontSize="1.1rem">
              S/ {totalCost}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

export default MyProducts;
