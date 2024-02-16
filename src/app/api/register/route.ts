import db from '@/lib/db'
import * as bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import { parseISO } from 'date-fns'; // Import parseISO function from date-fns

export async function POST(req: Request) {
    const body = await req.json()
    const { name, username, email, password, birthdate } = body
    const birthdateDate = parseISO(birthdate); // Parse birthdate string into a Date object

    try {

        const existingUser = await db.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new NextResponse('Email already exists', { status: 400 });
        }

        if (!name) {
            return new NextResponse('Name is required', { status: 400 })
        }

        if (!username) {
            return new NextResponse('Username is required', { status: 400 })
        }

        if (!email) {
            return new NextResponse('Email is required', { status: 400 })
        }

        if (!password) {
            return new NextResponse('Password is required', { status: 400 })
        }

        const admin = await db.user.create({
            data: {
                name,
                username,
                email,
                birthdate: birthdateDate, // Use parsed birthdateDate
                password: await bcrypt.hash(password, 10),
            },
        })
        return NextResponse.json(admin)
    } catch (error) {
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}
