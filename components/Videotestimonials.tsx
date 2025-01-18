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
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";

const videoTestimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:15",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "1:45",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:10",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
  },
];

export function VideoTestimonialSlider() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleVideoSelect = (video: string, name: string) => {
    setSelectedVideo(video);
    setSelectedName(name);
  };

  return (
    <section className="w-full bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold yellow_gradiet xl:text-6xl mb-4" id="Testimonials">
            Video Testimonials
          </h2>
          <p className="text-zinc-400 text-lg">
            Watch what our customers have to say about their experience
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
            {videoTestimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-zinc-900 border-zinc-800 p-6 h-full flex flex-col">
                  <div
                    className="relative group mb-6 cursor-pointer"
                    onClick={() =>
                      handleVideoSelect(testimonial.videoUrl, testimonial.name)
                    }
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img
                        src={testimonial.thumbnail}
                        alt={`${testimonial.name}'s testimonial`}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-zinc-900 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs text-white">
                        {testimonial.duration}
                      </div>
                    </div>
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

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => {
          setSelectedVideo(null);
          setSelectedName(null);
        }}
      >
        <DialogContent className="sm:max-w-[900px] p-0 bg-black">
          <DialogTitle className="sr-only">
            {selectedName
              ? `${selectedName}'s Testimonial Video`
              : "Video Testimonial"}
          </DialogTitle>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo || ""}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
