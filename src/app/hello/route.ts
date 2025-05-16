export async function GET(){
    return new Response(JSON.stringify({message:'Hello from a next js route handler'}),{
        status:200,
    });
}