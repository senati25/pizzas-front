import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OrderRepository from '../../../../api/OrderRepository';
import OrderDetailsContent from '../../shared/OrderDetailsContent';
import Spinner from '../../shared/Spinner';
import Container from '../Container';

const OrderDetails = () => {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState({});
  const [_isMounted, setIsMounted] = useState(true);

  const getDetails = async (orderId) => {
    setIsLoading(true);
    const data = await OrderRepository.getById(orderId);
    if (!data.error && _isMounted) {
      setOrder(data.payload);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      getDetails(router.query.id);
    }

    return () => {
      setIsMounted(false);
    };
  }, [router.query]);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <OrderDetailsContent order={order} orderStatus={[]} />
    </Container>
  );
};

export default OrderDetails;
