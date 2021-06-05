import { APP_NAME, APP_VERSION } from './app.constance';

export default class AppResponse<Model> {
    success?: boolean = false;
    name?: string = APP_NAME + " - " + APP_VERSION;
    status?: number = null;
    created?: string = new Date(new Date()).toString();
    message?: string = '';
    errorMessage?: string = '';
    data?: Model = null;
}
