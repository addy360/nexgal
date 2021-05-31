import { readdirSync } from "fs";
import {  join } from "path";

export const getImages = () => {
    const photoDir = join( process.cwd(), 'public', 'uploads' )
    return readdirSync( photoDir )
}
