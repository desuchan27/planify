import db from "@/lib/db";
import * as bcrypt from "bcrypt";

interface RequestBody {
    email: string;
    password: string;
}


export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user = await db.user.findFirst({
        where: {
            email: body.email,
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user;
        return new Response(JSON.stringify(userWithoutPass));
    } else return new Response(JSON.stringify(null));
}
