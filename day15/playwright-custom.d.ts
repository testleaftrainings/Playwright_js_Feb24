import { Page } from "@playwright/test";

declare module '@playwright/test'{

    interface Page{
        delayedFill:(selector:string,value:string)=>Promise<void>;
        clickwithDelay:(selector:string)=>Promise<void>;
    }
}