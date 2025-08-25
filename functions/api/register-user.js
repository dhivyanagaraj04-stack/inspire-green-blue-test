export async function onRequestPost(context) {
    const formdata = await context.request.formData();
    const user_name = formdata.get("user");
    const password = formdata.get("psw");
    // await context.env.USER_DATA_STORE.put(user_name, password);
    const getData = await context.env.USER_DATA_STORE.list();
    console.log(getData, 'test');
    
    return new Response(`${user_name} and ${password}`);
}

 