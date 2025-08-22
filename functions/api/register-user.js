export async function onRequestPost(context) {
    const formdata = await context.request.formdata();
    const user_name = formdata.get("user");
       const password = formdata.get("pswd");
    return new Response(`${user_name} and ${password}`);
}