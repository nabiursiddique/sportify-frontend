import { Button } from "@/components/ui/button";
import { increaseProductQuantityInCart } from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.products) || [];

  const handleIncreaseQuantity = (id: string) => {
    const product = cart.find((item) => item.id === id);
    if (
      product &&
      product.stockQuantity > 0 &&
      product.quantity < product.stockQuantity
    ) {
      dispatch(increaseProductQuantityInCart({ id, quantity: 1 }));
    } else {
      toast.warning("No more stock available");
    }
  };

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-lime-500">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={product?.image}
                            alt="Product image"
                          />
                          <span className="font-semibold">{product?.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="font-bold text-2xl">৳</span>
                        {product?.price}
                      </td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">
                            {product?.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(product.id)}
                            className="border rounded-md py-2 px-4 ml-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="font-bold text-2xl">৳</span>
                        {product?.quantity * product?.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <Button
                className="w-full hover:scale-95 transition-all bg-lime-700 hover:bg-lime-600"
                size={"lg"}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
