// Server-only modules サーバー側でのみ扱えるモジュール

import { dev } from "$app/environment";
import { PrismaClient } from "@prisma/client";

declare const global: {
    prisma: PrismaClient;
};

let prisma: PrismaClient;

if (dev) {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}else{
    prisma = new PrismaClient();
}

export default prisma;