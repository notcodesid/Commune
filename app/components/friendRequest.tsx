import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CheckIcon, XIcon } from "lucide-react";

// Define a type for the friend request data
type FriendRequestData = {
  name: string;
  jobTitle: string;
  avatarSrc: string;
};

// Sample data array
const friendRequests: FriendRequestData[] = [
  {
    name: "Olivia Anderson",
    jobTitle: "Financial Analyst",
    avatarSrc: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ethan Martinez",
    jobTitle: "Software Engineer",
    avatarSrc: "/placeholder.svg?height=40&width=40",
  },
];

export function FriendRequest() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Friend Requests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 w-full">
        {friendRequests.map((request, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={request.avatarSrc} alt={request.name} />
                <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{request.name}</p>
                <p className="text-sm text-muted-foreground">{request.jobTitle}</p>
              </div>
            </div>
            
            <div className="space-x-2 ml-4">
              <Button size="icon" variant="outline">
                <CheckIcon className="h-4 w-4" />
                <span className="sr-only">Accept</span>
              </Button>
              <Button size="icon" variant="outline">
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}