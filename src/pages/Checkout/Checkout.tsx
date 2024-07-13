import { Button } from "@/components/ui/button";
import { useUpdateStockQuantityMutation } from "@/redux/api/baseApi";
import {
  decreaseProductQuantityInCart,
  increaseProductQuantityInCart,
  removeAllProductsFromCart,
  removeProductFromCart,
} from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

const Checkout = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.products) || [];

  // increasing product quantity until the product is available
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

  // decrease product quantity
  const handleDecreaseQuantity = (id: string) => {
    const product = cart.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      dispatch(decreaseProductQuantityInCart({ id, quantity: 1 }));
    }
  };

  // calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // calculate tax based on subtotal
  const calculateTax = (subtotal: number) => {
    return subtotal * 0.15;
  };

  // calculating total price after tax and subtotal
  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  // cannot checkout if not in stock
  const isOutOfStock = cart.some(
    (product) => product.quantity > product.stockQuantity
  );

  // reducing products quantity after checkout
  const [updateStockQuantity] = useUpdateStockQuantityMutation();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isOutOfStock) {
      toast.warning("Some items in your cart are out of stock.");
    } else {
      //* updating stock quantity after checkout
      const productIds = cart.map((product) => product.id);
      const stockQuantity = cart.map((product) => product.quantity);
      updateStockQuantity({ productIds, stockQuantity });

      toast.success("Thanks For Ordering");
      dispatch(removeAllProductsFromCart());
    }
  };

  return (
    <div className="bg-gray-100  py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-extrabold mb-4  text-lime-500">
          Your Cart Items
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              {cart.length > 0 ? (
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
                    {cart.map((product, ind) => (
                      <tr key={ind}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={product?.image}
                              alt="Product image"
                            />
                            <span className="font-semibold">
                              {product?.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="font-bold text-2xl">৳</span>
                          {product?.price}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleDecreaseQuantity(product.id)}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
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
                        <td>
                          <Button
                            onClick={() =>
                              dispatch(removeProductFromCart(product.id))
                            }
                            className="bg-red-500 hover:bg-red-600 hover:scale-95 transition-all"
                          >
                            X
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 className="text-center lg:text-3xl text-2xl font-bold">
                  Your Cart is Empty
                </h1>
              )}
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="mx-3">
              <div className="flex justify-center">
                <div>
                  <div>
                    <h1 className="text-5xl pb-7 text-center font-extrabold text-lime-500">
                      Checkout
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-3">
                      <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          First Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-lime-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Nabiur"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Last Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-lime-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Siddique"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Your Email
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-lime-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          placeholder="nabiur@gmail.com"
                          required
                        />
                      </div>
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Phone Number
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-lime-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          placeholder="0123456789"
                          required
                        />
                      </div>

                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Delivery Address
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-lime-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          placeholder="naogaon"
                          required
                        />
                      </div>

                      <div className="w-full px-3 mb-2">
                        <h1 className="text-xl font-bold">
                          Your Total Bill: {total} (Including tax)
                        </h1>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mx-3">
                        <div>
                          <input
                            type="radio"
                            id="cashOnDelivery"
                            name="cashOnDelivery"
                            value="paymentMethod"
                          />
                          <label className="mx-2">Cash On Delivery</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="w-full"
                        variant={"custom"}
                        disabled={total === 0}
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
