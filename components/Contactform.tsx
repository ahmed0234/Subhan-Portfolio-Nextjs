"use client";

import { FormAdmitter } from "@/actions/formaction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-zinc-950 p-6 md:p-12 pb-16" id="Contact">
      <h1 className="yellow_gradiet text-5xl font-semibold md:text-4xl xl:text-6xl text-center pb-20">
        Contact Me
      </h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
              Let's work together!
            </h1>
            <p className="text-yellow-400/80">
              I design and build beautifully simple things and i love what i do.
              Just simple like that!
            </p>
          </div>

          <form className="space-y-6" action={FormAdmitter}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                required
                name="first_name"
                className="bg-zinc-900/50 border-zinc-800 text-yellow-400 placeholder:text-yellow-400/50"
              />
              <Input
                required
                placeholder="Last name"
                name="last_name"
                className="bg-zinc-900/50 border-zinc-800 text-yellow-400 placeholder:text-yellow-400/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="bg-zinc-900/50 border-zinc-800 text-yellow-400 placeholder:text-yellow-400/50"
              />
              <Input
                required
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="bg-zinc-900/50 border-zinc-800 text-yellow-400 placeholder:text-yellow-400/50"
              />
            </div>
            <Select name="service" required>
              <SelectTrigger className="w-full bg-zinc-900/50 border-zinc-800 text-yellow-400">
                <SelectValue placeholder="Web Design" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="3D Modeling">3D Modeling</SelectItem>
                <SelectItem value="Photoshop">Photoshop</SelectItem>
                <SelectItem value="Video Editing">Video Editing</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              required
              placeholder="Message"
              className="min-h-[150px] bg-zinc-900/50 border-zinc-800 text-yellow-400 placeholder:text-yellow-400/50"
            />
            <Button
              className="bg-yellow-400 text-zinc-950 hover:bg-yellow-500"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8 lg:pl-12">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <Phone className="w-6 h-6 text-zinc-950" />
            </div>
            <div>
              <h3 className="text-yellow-400 font-medium">Phone</h3>
              <p className="text-yellow-400/80 font-semibold">+92 3171511108</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <Mail className="w-6 h-6 text-zinc-950" />
            </div>
            <div>
              <h3 className="text-yellow-400 font-medium">Email</h3>
              <p className="text-yellow-400/80 font-semibold">
                rajasubhan123456@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-400 rounded-full">
              <MapPin className="w-6 h-6 text-zinc-950" />
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold">Address</h3>
              <p className="text-yellow-400/80">Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
