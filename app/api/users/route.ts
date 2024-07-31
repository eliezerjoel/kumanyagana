import client from "@/lib/db"
import { request } from "http"
import { NextResponse } from "next/server"

export const GET = async (request: Request) =>{
    await client.connect()
    const db = client.db("kumanyagana")
    const collection = db.collection('users')
    const result = await collection.find().toArray()
    console.log(result)
    return new NextResponse(JSON.stringify(result))

}

export const POST = async (request: Request) =>{
    await client.connect()
    const db = client.db("kumanyagana")
    const collection = db.collection('users')
    const result = await collection.insertOne({
        name: 'New Name'
    })
    return new NextResponse(JSON.stringify(result))

}