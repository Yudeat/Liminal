import bcrupt from 'bcrypt';

export async function hashPassword(password:string){
    return await bcrupt.hash(password,10);
}
export async function verifyPassword(password:string,hash:string){
    return await bcrupt.compare(password,hash);
}