"use server"

import { getIronSession } from "iron-session"
import { sessionOptions, SessionData, defaultSession } from "./lib/lib"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
    
let username = "john"
let isPro = true
let isBlocked = false

export const getSession = async () => {   
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    //CHECK USER IN THE DB
    session.isBlocked = isBlocked
    session.isPro = isPro

    
    return session;
}

export const login = async (
    prevState:{error:undefined | string },
    formData: FormData
    ) => {

    const session = await getSession()

    const formUsername= formData.get("username") as string
    const formPassword = formData.get("password") as string

    // CHECK USER IN THE DB
    //const user = await db.getUser({username, password})

    if(formUsername !== username){
        return {error:"Wrong Credentials!"}
    }

    session.userId= "1"
    session.username= formUsername;
    session.isPro= isPro;
    session.isLoggedIn= true;


    await session.save()
    redirect("/profile")
}

export const logout = async() => {
    const session = await getSession()
    session.destroy()
    redirect("/")

}

export const changePremium = async () => {
    const session = await getSession()

    //Update User in database

    isPro = !session.isPro
    session.isPro = isPro

    await session.save()
    revalidatePath("/profile") //Refreshes profile page to update info

}

export const changeUsername = async (formData:FormData) => {
    const session = await getSession()

    const newUsername = formData.get("username") as string

    username = newUsername
    
    session.username = username

    await session.save()
    revalidatePath("/profile")
  

}