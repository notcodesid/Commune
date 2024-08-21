import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, ThumbsUp } from "lucide-react"

interface PostCardProps {
  name: string;
  jobTitle: string;
  timeAgo: string;
  content: string;
  imageUrl?: string;
}


export function PostCard({ name, jobTitle, timeAgo, content, imageUrl }: PostCardProps) {
    return (
      <Card className="mt-5 md:px-0 bg-white shadow-sm mb-4 rounded-xl">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YroXrbQSSSVKmwr5yF1wpj6vejde3W.png" alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{jobTitle}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{timeAgo}</span>
          </div>
          <p className="mb-4">{content}</p>
          {imageUrl && (
            <img src={imageUrl} alt="Post image" className="w-full rounded-md mb-4" />
          )}
        </CardContent>
        <CardFooter className="px-4 py-3 border-t flex justify-start items-center space-x-4">
          <Button variant="ghost" className="text-gray-600">
            <ThumbsUp className="w-5 h-5 mr-2" />
            Like
          </Button>
          <Button variant="ghost" className="text-gray-600">
            <MessageSquare className="w-5 h-5 mr-2" />
            Comment
          </Button>
        </CardFooter>
        <div className="px-4 py-3 border-t flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Input 
            className="flex-grow bg-gray-100 rounded-full text-sm placeholder-gray-500"
            placeholder="Share your thoughts here..."
          />
        </div>
      </Card>
    )
  }