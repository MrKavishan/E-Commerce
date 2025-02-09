import React from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaGift,
  FaUserFriends,
  FaShoppingCart,} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaTruck size={50} color="var(--color-green)" />,
      title: "Home Delivery",
      description:
        "We deliver your favorite spices right to your doorstep. Enjoy hassle-free shopping!",
    },
    {
      id: 2,
      icon: <FaGift size={50} color="var(--color-green)" />,
      title: "Gift Packs",
      description:
        "Our gift packs include cardamom, cloves, and pepper, perfect for gifting to relatives or special guests.",
    },
    {
      id: 3,
      icon: <FaUserFriends size={50} color="var(--color-green)" />,
      title: "Special Occasions",
      description:
        "Make your celebrations memorable with our premium spice collections.",
    },
    {
      id: 4,
      icon: <FaShoppingCart size={50} color="var(--color-green)" />,
      title: "Online Ordering",
      description:
        "Order your favorite spices online with just a few clicks. Easy and convenient!",
    },
    
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="services" id="services"
    >
      <h1>Our Services</h1>
      <p>We are committed to providing exceptional service to our customers.</p>

      <div className="services-container">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;