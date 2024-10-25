"use client";

import coins from "@/data/coins/coins.json";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import items from "@/data/items/items.json";
import { CardDonation } from "./CardDonation";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

export const Donation = () => {
    return (
        <div className="w-full p-4">
            <div className="flex flex-col space-y-2">
                <div className="flex flex-col w-full justify-center items-center gap-2">
                    <Label className="text-3xl font-bold">
                        <Label className="text-textSecondary text-3xl font-bold">Crypto</Label>&nbsp;Donation
                    </Label>
                    <Label>Select an item to start donation</Label>
                </div>
                <AnimatePresence mode="wait">
                    <div className="w-full p-4">
                        <div className="space-y-1">
                            <div className="flex flex-row flex-wrap gap-5 justify-center">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.25,
                                        }}
                                    >
                                        <CardDonation
                                            id={item.id}
                                            name={item.name}
                                            link={item.link}
                                            image={item.image}
                                            price={item.price}
                                            source={item.source}
                                            coins={coins}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};
