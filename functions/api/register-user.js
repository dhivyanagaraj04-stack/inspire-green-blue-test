export async function onRequestPost(context) {
    const formdata = await context.request.formdata();
    const user_name = formdata.get("user");
    const password = formdata.get("pswd");
    await context.env.USER_DATA_STORE.put(user_name, password);
    return new Response(`${user_name} and ${password}`);
}