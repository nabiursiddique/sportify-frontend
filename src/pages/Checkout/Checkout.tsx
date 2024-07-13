import { Button } from "@/components/ui/button";
import { removeAllProductsFromCart } from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const location = useLocation();
  const initialTotal = location.state?.total || 0;
  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(initialTotal);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast.success("Thanks For Ordering");
    setTotal(0);
    dispatch(removeAllProductsFromCart());
  };

  return (
    <div className="mx-6">
      <div className="flex justify-center my-5">
        <div>
          <div>
            <h1 className="text-5xl pb-10 pt-5 text-center font-extrabold text-lime-500">
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
                  placeholder="nabiur@gmail.com"
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
                  placeholder="nabiur@gmail.com"
                  required
                />
              </div>

              <div className="w-full px-3 mb-2">
                <h1 className="text-xl font-bold">Your Total Bill: {total}</h1>
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
  );
};

export default Checkout;
