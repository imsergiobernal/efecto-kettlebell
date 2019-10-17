import { IHttpRequestHandler } from './HttpRequestHandler';
import { IHttpRequestHandlerResponses } from './HttpRequestHandlerResponses';

import { IRequestHandler } from '@core/infrastructure/request-handler/IRequestHandler';

/**
 * Parece que el RQ y RS que se pasan a través de IHttpController se pasan al RQ, RS de
 * IBaseController. Prueba a eliminar RS de IHttpController.
 */
export interface IHttpRequestHandler<RQ, RS> extends IRequestHandler<RQ> {
  res: RS;
}

export abstract class HttpRequestHandler<RQ, RS> implements IHttpRequestHandler<RQ, RS>/*, IHttpRequestHandlerResponses*/ {
  req: any;
  res: any;
  controller: any;

  public handle<RQ, RS>(req: RQ, controller: any, res?: RS): void {
    this.req = req;
    this.res = res;
    this.controller = controller;

    this.controller.call();
  };

  abstract jsonResponse(): any;

}
