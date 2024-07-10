"use client"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { login } from "@/actions"


export function LoginForm() {
    const [state, formAction] = useFormState<any,FormData>(login, undefined)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="grid gap-4">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="username" type="username" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
                </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Sign in</Button>
        </CardFooter>
      </form>

    </Card>
  )
}
