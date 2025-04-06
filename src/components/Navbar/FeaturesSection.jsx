import React from "react";
import { ShoppingCart, CreditCard, Truck } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <Icon size={48} className="text-[#7D0A0A] mb-4" />
    <h3 className="text-[#7D0A0A] text-lg font-semibold mb-2">{title}</h3>
    <p className="text-[#BF3131]">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Sell everywhere",
      description:
        "Sell online with your ecommerce store, online marketplaces, social media, and in-person with Shopify point of sale.",
    },
    {
      icon: CreditCard,
      title: "Let customers pay their way",
      description:
        "Accept credit cards, local payment methods, and accelerated checkouts with Shopify Payments, or choose from over 100 third-party payment gateways.",
    },
    {
      icon: Truck,
      title: "Simplified shipping",
      description:
        "Fulfill one or multiple orders with a single click and give your customers negotiated shipping rates with Shopify Shipping.",
    },
  ];

  return (
    <section className="bg-[#EEEEEE] py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
