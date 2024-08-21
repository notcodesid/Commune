import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { PlusIcon } from "lucide-react";

export function SuggestedFriend() {
    return (
        <Card className="bg-white border-none rounded-xl">
        <CardHeader>
          <CardTitle>Suggested Friends</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {["Thomas Baker", "Lily Lee", "Andrew Harris"].map((name, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={name} />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{name}</p>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 ? "Project Manager" : index === 1 ? "Graphic Designer" : "Data Scientist"}
                  </p>
                </div>
              </div>
              <Button size="icon" variant="outline">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add friend</span>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    )
}