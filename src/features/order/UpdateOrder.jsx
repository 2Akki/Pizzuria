/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
// import { updateOrder } from '../../services/apiRestaurant';

// eslint-disable-next-line no-unused-vars, react/prop-types
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line no-unused-vars
export async function action({ request, params }) {
   const data = { priority: true };
  console.log(params.orderid, data)
  //  await updateOrder(params.orderid, data);
   return null;
  
}
