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
    name: "Roddy",
    role: "Photoshop Artist",
    image: "/avatar.png",
    thumbnail:
      "https://myswmj0bx7.ufs.sh/f/S3rRKhy2jOuAUZDSQshofbcRnY24AymQFuBZlwxzPDH5TkXr",
    videoUrl: "https://www.youtube.com/embed/av1_VqNOxjA",
    duration: "2:15",
  },
  {
    name: "Avi Cohen",
    role: "Script and ScreenPlay",
    image: "/avatar.png",
    thumbnail:
      "https://myswmj0bx7.ufs.sh/f/S3rRKhy2jOuAAHYznI9oLSpd0vslm6PJn7ErRFHf4T1293xI",
    videoUrl: "https://www.youtube.com/embed/tALRj0qgEns",
    duration: "1:45",
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
          <h2
            className="text-3xl sm:text-4xl font-bold yellow_gradiet xl:text-6xl mb-4"
            id="Testimonials"
          >
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
