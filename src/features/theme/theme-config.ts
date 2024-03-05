export const AI_NAME = process.env.AI_NAME ?? "MyGPT";
export const AI_DESCRIPTION = AI_NAME+" is a friendly AI assistant.";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const DALL_E3_ENABLE = (process.env.AZURE_OPENAI_DALLE_API_KEY === undefined ||  process.env.AZURE_OPENAI_DALLE_API_INSTANCE_NAME === undefined ||  process.env.AZURE_OPENAI_DALLE_API_DEPLOYMENT_NAME === undefined ||  process.env.AZURE_OPENAI_DALLE_API_VERSION === undefined) ? false : true;
export const CHAT_DEFAULT_SYSTEM_PROMPT = (DALL_E3_ENABLE) ? 
`You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user asks you to create an image.`
:
`You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.`;

export const NEW_CHAT_NAME = "New chat";

export const SPEECH_ENABLE = (process.env.AZURE_SPEECH_REGION === undefined ||  process.env.AZURE_SPEECH_KEY === undefined) ? false : true;
export const VISION_ENABLE = (process.env.AZURE_OPENAI_VISION_API_KEY === undefined ||  process.env.AZURE_OPENAI_VISION_API_INSTANCE_NAME === undefined ||  process.env.AZURE_OPENAI_VISION_API_VERSION === undefined ||  process.env.AZURE_OPENAI_VISION_API_INSTANCE_NAME === undefined) ? false : true;