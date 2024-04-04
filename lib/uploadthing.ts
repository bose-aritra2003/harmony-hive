import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "../../../Downloads/event_platform-main/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();