export const AI_NAME = process.env.NEXT_PUBLIC_AI_NAME ?? "MyGPT";
export const AI_DESCRIPTION = AI_NAME+" is a friendly AI assistant.";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const DALL_E3_ENABLE = process.env.NEXT_PUBLIC_DALL_E3_ENABLE ?? "NO";
export const CHAT_DEFAULT_SYSTEM_PROMPT = (DALL_E3_ENABLE == "YES") ? 
`You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user asks you to create an image.`
:
`You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.`;

export const NEW_CHAT_NAME = "New chat";

export const SPEECH_ENABLE = false;
export const VISION_ENABLE = process.env.NEXT_PUBLIC_VISION_ENABLE ?? "NO";