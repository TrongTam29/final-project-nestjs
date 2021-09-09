import { Logger, Post, Req, UseGuards } from '@nestjs/common';
import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';


// { transports: 'websocket', namespace: 'comment' }
@WebSocketGateway(81)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    private logger: Logger = new Logger('AppGateWay');
    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnect: ${client.id}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Client connect: ${client.id}`);
    }

    afterInit(server: any) {
        this.logger.log('Init');
    }

    articleService: any;
    //   constructor(private reportService: ReportService) { }
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('msgToServer')
    async handleMessage(client: Socket, @MessageBody() message: string): Promise<void> {

        this.server.emit('msgToClient', message);
    }

    @SubscribeMessage('commentToServer')
    async handleArticle(client: Socket, @MessageBody() data: { articleId: number, userId: number, comment: string }): Promise<void> {
        const { articleId, userId, comment } = data
        console.log(data)
        await this.articleService.createArticleComment(articleId, userId, comment);
        this.server.emit('commentToClient', articleId);
    }


}