import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Req,
    Res,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
// import { FilesInterceptor } from '@nestjs/platform-express';
// // import { JwtAuthGuard } from '../guards/jwt-auth.guard';
// import { diskStorage } from 'multer';
// import { Observable, of } from 'rxjs';
import { Article } from '../models/article.entity';
import { ArticleService } from '../services/article.service';
// import { JwtPayload } from '../interfaces/auth.payload';
// import { mkdirsSync } from 'fs-extra';
// import { join } from 'path';
// import { CreateReportPayload } from '../interfaces/report.interface';
import AppResponse from 'src/utils/app.response';
// import * as fs from 'fs';

@Controller('posts')
export class ArticleController {
    constructor(private postService: ArticleService) { }

    @Get('get-all-article')
    async getAllPosts(): Promise<Article[]> {
        return this.postService.findAll();
    }

    @Get('search-article')
    async search(@Query('name') name: string): Promise<AppResponse<any[]>> {
        const response = new AppResponse<any[]>();
        response.data = await this.postService.searchArticle(name);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('upload')
    // @UseInterceptors(
    //     FilesInterceptor('file', 20, {
    //         storage: diskStorage({
    //             destination: (req, file, cb) => {
    //                 const user = req.user as JwtPayload;
    //                 const path = `./uploads/${user.id}/`;
    //                 mkdirsSync(path);
    //                 cb(null, path);
    //             },
    //             filename: (req, file, cb) => {
    //                 console.log('upload request', req);
    //                 cb(null, `${file.originalname}`);
    //             },
    //         }),
    //         fileFilter: (req: Request, file, cb) => {
    //             const ext = file.mimetype;
    //             if (
    //                 ext == 'image/jpeg' ||
    //                 ext == 'image/png' ||
    //                 ext ==
    //                 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    //                 ext == 'application/pdf' ||
    //                 ext == 'application/msword'
    //             ) {
    //                 return cb(null, true);
    //             }
    //             return cb(new Error('Extension not allowed'), false); // FileIntercepter is completely ignoring this.
    //         },
    //     }),
    // )
    // async uploadFile(
    //     @UploadedFiles() files,
    //     @Body() payload: CreateReportPayload,
    // ): Promise<any> {
    //     // files.forEach((file) => {
    //     //   const ext = file.mimetype;
    //     // if (ext == 'image/jpeg' || ext == 'image/png') {
    //     // } else {
    //     // }
    //     const response = new AppResponse<any>();
    //     console.log('post', files);
    //     // return of({ imagePath: file.filename });
    //     response.data = { imagePath: files.filename };
    //     response.success = true;
    //     response.message = 'Successfully';
    //     response.status = 200;
    //     return response;
    // }

    // @Get('download-file/:id/:fileName')
    // downloadImage(
    //     @Param('fileName') fileName,
    //     @Param('id') id,
    //     @Res() res,
    // ): Observable<AppResponse<any>> {
    //     const response = new AppResponse<any>();
    //     response.data = res.sendFile(
    //         join(process.cwd(), `./uploads/${id}/${fileName}`),
    //     );
    //     response.success = true;
    //     response.message = 'Successfully';
    //     response.status = 200;
    //     return of(response);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Delete('deleteFile/:path')
    // async deleteFile(
    //     @Param('path') path: string,
    //     @Req() request: Express.Request,
    // ): Promise<any> {
    //     const user = request.user as JwtPayload;
    //     const pathFull = `./uploads/${user.id}/${path}`;
    //     const response = new AppResponse<any>();
    //     try {
    //         response.data = await fs.unlinkSync(pathFull);
    //         response.success = true;
    //         response.message = 'Successfully';
    //         response.status = 200;
    //         return response;
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
}
