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
    { id: 8, image: '/product/P8.jpeg' },
    { id: 2, image: '/product/P2.jpeg' },
    { id: 3, image: '/product/P3.jpeg' },
    { id: 4, image: '/product/P4.jpeg' },
    { id: 6, image: '/product/P6.jpeg' },
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
                                    whileHover={{ y: -12 }}
                                >
                                    <div className="bg-white rounded-md shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-blue-200/50 hover:border-blue-200">
                                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[9/16]">
                                            <motion.img
                                                src={product.image}
                                                alt={`Product ${product.id}`}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
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