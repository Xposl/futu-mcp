import { name, toolDefine, mcpCall } from './stock/requestHistoryKL.js';
export const tools = [toolDefine];
export const handlers = {
    [name]: mcpCall
};
