import React from "react";
import { Form, Link, NavLink } from "react-router-dom";
import { LuSearch, LuUserRound, LuHeart, LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { navigations } from "../utils/paths";

const Header = () => {
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishlist);

  return (
    <section className="w-full">
      <header className="container container-md container-lg mx-auto p-4">
        <div id="logo" className="py-4 flex items-center align-items-center justify-between">
          <span className="font-bold text-2xl uppercase">Shopee</span>

          <div className="flex items-center gap-4">
            <Form method="GET" action="/search" id="searchBox" className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <input type="text" name="q" placeholder="Type to here search..." className="focus:outline-none bg-transparent" />
              <button type="submit"><LuSearch /></button>
            </Form>

            <Link to={"/user"}>
              <LuUserRound size={20} />
            </Link>
            <Link to={"/wishlist"} className="relative">
              <LuHeart size={20} />

              {wishlist.size != 0 && <div className="absolute -top-1 -right-2 bg-blue-700 rounded-full text-white text-xs px-1">
                <span>{wishlist.size}</span>
              </div>}
            </Link>

            <Link to={"/cart"} className="relative">
            
              <LuShoppingCart size={20} />
              {cart.size != 0 && <div className="absolute -top-1 -right-2 bg-blue-700 rounded-full text-white text-xs px-1">
                <span>{cart.size}</span>
              </div>}
            </Link>

          </div>
        </div>
        <nav className="flex items-center gap-4 py-4 border-y border-gray-100">
          {navigations.map((link) => (
            <NavLink
              key={link.id}
              to={link.url}
              className={({ isActive }) =>
                isActive ? "text-blue-700" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </section>
  );
};

export default Header;
