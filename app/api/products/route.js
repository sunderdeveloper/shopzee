export async function GET(){
    const products = [
        {
            id:1,
            title:"Men T-shirt",
            price:599,
            catergory:"men"
        },
        {
            id:2,
            title:"Men shirt",
            price:799,
            catergory:"men"
        }
    ]
    return Response.json({
        success:true,
        products
    })
}