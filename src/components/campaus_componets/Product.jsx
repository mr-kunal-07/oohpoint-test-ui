"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
    { id: 8, image: '/product/P1.jpeg' },
    { id: 3, image: '/product/P3.jpeg' },
    { id: 4, image: '/product/P4.jpeg' },
    { id: 6, image: '/product/10.png' },
    { id: 2, image: '/product/P2.jpeg' },
    { id: 7, image: '/product/P7.jpeg' },
    { id: 9, image: '/product/P9.jpeg' },
];

function ProductSlider() {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto px-3 md:px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {products.map((product, index) => (
                            <CarouselItem key={`${product.id}-${index}`} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                >
                                    <div className="bg-white rounded-xs shadow-xl overflow-hidden ">
                                        <div className="relative  overflow-hidden  aspect-[9/16]">
                                            <motion.img
                                                src={product.image}
                                                alt={`Product ${product.id}`}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-14 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl transition-all hover:scale-110" />
                    <CarouselNext className="hidden md:flex -right-14 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl transition-all hover:scale-110" />
                </Carousel>
            </div>
        </div>
    );
}

export default ProductSlider;