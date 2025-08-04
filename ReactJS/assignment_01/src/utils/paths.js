import { FaHandHoldingDollar } from "react-icons/fa6"
import { LiaShippingFastSolid } from "react-icons/lia"
import { PiChatsCircleLight, PiHandshakeLight } from "react-icons/pi"

export const navigations = [
    {
        id: 1,
        label: "Home",
        url: "/",
    },
    {
        id: 2,
        label: "Products",
        url: "/products",
    },
]

export const features = [{
    id: 1,
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "On all orders over ₹99"
}, 
{
    id: 2,
    icon: PiHandshakeLight,
    title: "Secure Payment",
    description: "We ensure sucure payment"
},
{
    id: 3,
    icon: FaHandHoldingDollar,
    title: "Secure Payment",
    description: "We ensure sucure payment"
},
{
    id: 4,
    icon: PiChatsCircleLight,
    title: "Online Support",
    description: "24/7 Dedicated Support"
},]