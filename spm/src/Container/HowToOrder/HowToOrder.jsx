import React from "react";
import { FaPhone, FaWhatsapp, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import './HowToOrder.css';

const HowToOrder = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="how-to-order"
    >
      <h1>How to Order</h1>
      <p>We offer multiple ways for you to place an order:</p>

      <div className="order-methods">
        
        <motion.div
          className="method"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaPhone size={50} color="var(--color-green)" />
          <h3>Call Us</h3>
          <p>Give us a call at <strong>+1234567890</strong> to place your order.</p>
        </motion.div>

       
        <motion.div
          className="method"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaWhatsapp size={50} color="var(--color-green)" />
          <h3>WhatsApp Us</h3>
          <p>Send us a message on WhatsApp at <strong>+1234567890</strong>.</p>
        </motion.div>

        
        <motion.div
          className="method"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaStore size={50} color="var(--color-green)" />
          <h3>Visit Our Shop</h3>
          <p>Come visit us at our shop located at <strong>123 Main Street</strong>.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowToOrder;