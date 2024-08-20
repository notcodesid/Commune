import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ImageIcon } from "lucide-react";

export function Addpost() {
    return (
        <>
    <Card className=" mt-5 mx-3 md:mx-0 bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <Input 
              className="w-full bg-transparent border-none text-base placeholder-gray-500 focus:outline-none focus:ring-0" 
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" className="text-gray-600 bg-transparent border-none hover:bg-gray-100">
            <ImageIcon className="w-5 h-5 mr-2" />
            Add Media
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
        </>
    )
}