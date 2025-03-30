#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
// 导入富途API及相关协议
import { tools, handlers } from './hooks/mcp.js'


class FutoMcp {
  private server: Server;
  
  constructor() {
    this.server = new Server(
      {
        name: 'futu-mcp',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );
    this.setupToolHandlers();
    this.server.onerror = (error) => console.error('[MCP Error]', error);
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const toolName = request.params.name;
      if (!(toolName in handlers)) {
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${toolName}`
        );
      }
      // Type assertion to make TypeScript happy
      return handlers[toolName as keyof typeof handlers](request as any);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Futu MCP server running on stdio');
  }
}

const server = new FutoMcp();
server.run().catch(console.error);
