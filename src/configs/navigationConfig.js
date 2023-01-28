import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaFileSignature,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "ORDER MANAGEMENT",
  },
  {
    id: "order",
    title: "Orders",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "all",
        title: "All",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/all",
      },
      {
        id: "pending",
        title: "Pending",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/pending",
      },
      {
        id: "confirmed",
        title: "Confirmed",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/confirmed",
      },
      {
        id: "packaging",
        title: "Packaging",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/packaging",
      },
      {
        id: "outfordelivery",
        title: "Out for delivery",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/outfordelivery",
      },
      {
        id: "delivery",
        title: "Delivered",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/delivered",
      },
      {
        id: "return",
        title: "Returned",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/returned",
      },
      {
        id: "failedtodeliver",
        title: "Failed to Deliver",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/failedtodeliver",
      },
      {
        id: "canceled",
        title: "Canceled",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/canceled",
      },
    ],
  },
  {
    id: "refund",
    title: "Refund Requests",
    type: "collapse",
    icon: <FaRegFileAlt size={15} />,
    children: [
      {
        id: "pending",
        title: "Pending",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/pendingRequest",
      },
      {
        id: "approv",
        title: "Approved",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/approvedRequest",
      },
      {
        id: "refund",
        title: "Refunded",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/refundRequest",
      },
      {
        id: "reject",
        title: "Rejected",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/rejectedRequest",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "Hub Managment",
  },

  {
    id: "hubmanagment",
    title: "Hub",
    type: "collapse",
    icon: <FaStore size={15} />,
    children: [
      {
        id: "batch",
        title: "Assign to Hub",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hub/assigntohub",
      },
      {
        id: "addProduct",
        title: "Add Product",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hub/addproduct",
      },
      {
        id: "createbatch",
        title: " Create Batch ",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hub/createbatch",
      },
      {
        id: "assigntobatch",
        title: "Assign to Batch",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hub/assigntobatch",
      },
    ],
  },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Language",
  // },
  // {
  //   id: "language",
  //   title: "Language",
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/language/LanguagesList",
  // },
];
export default navigationConfig;
