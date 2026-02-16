"use client";


import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BLOG_POSTS } from "@/lib/data";
import { Button } from "@/components/ui/Button"; // Keep existing button
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
    return (
        <section id="blog" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-4">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                            Latest <span className="text-primary">Insights</span>
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg">
                            Tips, news, and updates from the world of luxury autos.
                        </p>
                    </div>
                    <Button variant="link" className="hidden md:inline-flex text-primary gap-2">
                        View All Posts <ArrowRight size={16} />
                    </Button>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="pb-12"
                >
                    {BLOG_POSTS.map((post) => (
                        <SwiperSlide key={post.id} className="h-auto">
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                                <div className="relative h-48 w-full bg-gray-200">
                                    {/* Using a placeholder div or Next/Image if we had real images. 
                      Since we don't have blog images, we'll use a colored placeholder. */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                        <span className="text-sm font-medium">Image Placeholder</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="font-sans text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{post.date}</div>
                                    <h3 className="font-heading text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                                    <p className="font-sans text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                                    <Link href={`#blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors gap-1 mt-auto">
                                        Read Article <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="md:hidden mt-8 text-center">
                    <Button variant="outline" className="w-full">View All Posts</Button>
                </div>
            </div>
        </section>
    );
}
