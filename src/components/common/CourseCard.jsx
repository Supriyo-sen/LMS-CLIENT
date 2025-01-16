import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon, HeartIcon } from "lucide-react";

export default function CourseCard() {
  return (
    <Card className="overflow-hidden bg-white  rounded-[32px] border-none shadow-lg">
      {/* Course Banner */}
      <div className="relative bg-[#1C0C41] p-8">
        <div className="relative h-[200px] flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bkh9Plg42bPGe9tp9ZyFoTzYh2uony.png"
            alt="UI/UX Course Banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-6 right-6 bg-white rounded-xl px-4 py-1.5 shadow-lg">
          <span className="text-[#FF5757] text-lg font-bold">$300</span>
          <span className="text-gray-400 text-sm line-through ml-2">
            $99.00
          </span>
        </div>
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Instructor Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-gray-100">
              <AvatarImage src="/placeholder.svg" alt="Nicole Brown" />
              <AvatarFallback>NB</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Nicole Brown
              </h3>
              <p className="text-sm text-gray-500">Instructor</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full hover:bg-pink-50"
          >
            <HeartIcon className="h-6 w-6 text-[#FF5757]" />
          </Button>
        </div>

        {/* Course Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          Information About UI/UX Design Degree
        </h2>

        {/* Course Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 rounded-lg px-3 py-1.5">
              <span className="text-sm font-medium text-purple-900">
                📚 12+ Lesson
              </span>
            </div>
            <div className="bg-purple-100 rounded-lg px-3 py-1.5">
              <span className="text-sm font-medium text-purple-900">
                ⏰ 9hr 30min
              </span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < 4 ? "text-yellow-400" : "text-gray-200"
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-900">4.0</span>
          <span className="text-gray-500">(15)</span>
        </div>

        {/* Buy Button */}
        <Button className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-[#6B4BFF] to-[#BB4BFF] hover:from-[#5A3AEE] hover:to-[#AA3AEE] text-white rounded-2xl shadow-lg shadow-purple-200">
          BUY NOW
        </Button>
      </CardContent>
    </Card>
  );
}
