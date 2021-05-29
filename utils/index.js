import { readdirSync } from "fs";
import { join } from "path";

export const getImages = () => {
    return readdirSync( join( process.cwd(), 'public', 'uploads' ) )
}
