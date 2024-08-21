import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileHeader() {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <Avatar className="h-20 w-20">
          <AvatarImage alt="Robert Fox" src="https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <AvatarFallback>RF</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Robert Fox</h2>
              <p className="text-sm text-muted-foreground">@robert</p>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <p className="text-xl font-semibold">12</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div>
                <p className="text-xl font-semibold">207</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div>
                <p className="text-xl font-semibold">64</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm">Software Engineer</p>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="my-posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-posts">My Posts</TabsTrigger>
            <TabsTrigger value="saved-posts">Saved Posts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )
}