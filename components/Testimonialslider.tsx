"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Avi Cohen",
    role: "Photoshop Artist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    content:
      "Subhan has been a real pleasure to deal with. He works quickly, is open to all sorts of feedback, and he's always got interesting suggestions that I otherwise wouldn't have considered. To top it all off, he's a genuinely good man who won't rest until you are completely satisfied with the final product. I highly recommend this freelancer.",
  },
  {
    name: "Dave",
    role: "Vfx & CGI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
    content:
      "Subhan does great work and is a great professional. He is constantly trying to find ways to improve and grow my project",
  },
  {
    name: "Prasad",
    role: "Thumbnail Designing",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
    content:
      "Good helpful resource. Will work with him again",
  },
  {
    name: "Roddy Hanson",
    role: "Script & ScreenPlay",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80",
    content:
      "Love working with Subhan he always does a great job.",
  },
];

export function TestimonialSlider() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold yellow_gradiet xl:text-6xl mb-4" id="Reviews">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-zinc-900 border-zinc-800 p-6 h-full flex flex-col">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-yellow-400 mb-4" />
                    <p className="text-zinc-300 italic mb-6 text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-yellow-400 font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex sm:flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative bg-zinc-800 hover:bg-zinc-700 border-zinc-700" />
            <CarouselNext className="relative bg-zinc-800 hover:bg-zinc-700 border-zinc-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
