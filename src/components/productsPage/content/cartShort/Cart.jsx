import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useRegisterContext } from "../../../../context/Context";

const Cart = ({ id, images, name, price, brand }) => {
  const { addCart, addToFavorites, user } = useRegisterContext();

  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      AddToCart();
    } else {
      navigate("/register");
    }
  };

  const AddToCart = () => {
    const product = {
      id,
      name,
      price,
      brand,
      count: 1,
      images: images.main,
    };
    addCart(product);
  };

  const addFavorites = () => {
    const product = {
      id,
      name,
      price,
      brand,
      images: images.main,
    };
    addToFavorites(product);
  };

  return (
    <div className="group">
      <div className="w-full relative overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-80">
        <img
          src={images.main}
          alt={name}
          className="h-full w-full object-cover lg:h-full lg:w-full"
        />
        <div className="absolute inset-5 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 transition-all">
          <div className="space-x-2 bg-white p-2 rounded flex">
            <button className="p-2" onClick={handleClick}>
              <MdOutlineLocalGroceryStore className="h-5 w-5 text-gray-800" />
            </button>
            <button className="p-2" onClick={addFavorites}>
              <AiOutlineHeart className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 hover:text-redLight duration-200">
            <Link to={`/product/${id}`}>{name.slice(0, 18) + "..."}</Link>
          </h3>
          <p className="text-sm font-bold">{brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
    </div>
  );
};

export default Cart;
