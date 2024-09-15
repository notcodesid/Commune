import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp, MessageSquare } from "lucide-react"

interface CommentProps {
  username: string
  avatarSrc: string
  timestamp: string
  content: string
  likes: number
}

export default function Comment({ 
  username = "John Doe",
  avatarSrc = "https://i.pravatar.cc/40?img=1",
  timestamp = "2 hours ago",
  content = "Great insights! Digital marketing is indeed crucial in today's business landscape.",
  likes = 5
}: CommentProps) {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0 ">
      <div className="flex items-start space-x-3">
        <Avatar className="w-8 h-8 rounded-sm">
          <AvatarImage src={avatarSrc} alt={username} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{username}</p>
          <p className="text-sm text-gray-700 mt-1">{content}</p>
          <div className="flex items-center space-x-4 mt-2">
            <Button variant="ghost" size="sm" className="text-gray-600 p-0 h-auto">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 p-0 h-auto">
              <span className="text-xs">Reply</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}