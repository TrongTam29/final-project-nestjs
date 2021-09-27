// import { Logger, Post, Req, UseGuards } from '@nestjs/common';
// import {
//     MessageBody,
//     OnGatewayConnection,
//     OnGatewayDisconnect,
//     OnGatewayInit,
//     SubscribeMessage,
//     WebSocketGateway,
//     WebSocketServer,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';


// // { transports: 'websocket', namespace: 'comment' }
// @WebSocketGateway(81)
// export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

//     private logger: Logger = new Logger('AppGateWay');
//     handleDisconnect(client: Socket) {
//         this.logger.log(`Client disconnect: ${client.id}`);
//     }

//     handleConnection(client: Socket, ...args: any[]) {
//         this.logger.log(`Client connect: ${client.id}`);
//     }

//     afterInit(server: any) {
//         this.logger.log('Init');
//     }

//     articleService: any;
//     //   constructor(private reportService: ReportService) { }
//     @WebSocketServer()
//     server: Server;

//     @SubscribeMessage('msgToServer')
//     async handleMessage(client: Socket, @MessageBody() message: string): Promise<void> {

//         this.server.emit('msgToClient', message);
//         console.log(message);
//     }

//     @SubscribeMessage('commentToServer')
//     async handleArticle(client: Socket, @MessageBody() data: { articleId: number, userId: number, comment: string }): Promise<void> {
//         const { articleId, userId, comment } = data
//         console.log(data)
//         await this.articleService.createArticleComment(articleId, userId, comment);
//         this.server.emit('commentToClient', articleId);
//     }
// }

import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    MessageBody,
} from '@nestjs/websockets';

import { Server } from 'ws';
import { ExerciseComment } from './models/exercise.comment.entity';
import { ExerciseCommentService } from './services/exercise.comment.service';


interface Comment {
    userId: number;
    exerciseId: number;
    comment: string;
}

@WebSocketGateway()
export class AppGateway
    implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    constructor(private exerciseCommentService: ExerciseCommentService) { }
    @WebSocketServer()

    server!: Server;

    handleConnection(client: any, ...args: any[]) {
        console.warn(`Client: ${client} connected`);

        client.on('message', async (message) => {
            let comment: Comment = JSON.parse(message);
            await this.exerciseCommentService.createExerciseComment(comment.userId, comment.exerciseId, comment.comment)
            client.send(comment.comment);
            console.log(message);
            console.log(comment.comment);
        });
    }


    handleDisconnect(client: any) {
        console.warn(`Client[${client}] disconnected`);
    }

    afterInit(server: any) {
        console.log(server);
    }

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): void {
        console.log('123123');
    }
}

