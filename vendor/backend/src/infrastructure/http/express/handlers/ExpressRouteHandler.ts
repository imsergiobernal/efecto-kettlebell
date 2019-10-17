import * as express from 'express';

import { IHttpRequestHandler, HttpRequestHandler } from '@interface/http/HttpRequestHandler';

export interface IExpressRouteHandler extends IHttpRequestHandler<express.Request, express.Response> {}

export abstract class ExpressRouteHandler extends HttpRequestHandler<express.Request, express.Response> {
  req: express.Request;
  res: express.Response;

  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok(res: express.Response, dto?: string) {
    if(!!dto) {
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public created<T>(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 400, message ? message : 'Unauthorized');
  }

  public unauthorized(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 401, message ? message : 'Unauthorized');
  }

  public paymentRequired(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 402, message ? message : 'Payment required');
  }

  public forbidden(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 403, message ? message : 'Forbidden');
  }

  public notFound(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 404, message ? message : 'Not found');
  }

  public conflict(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 409, message ? message : 'Conflict');
  }

  public tooMany(message?: string) {
    return ExpressRouteHandler.jsonResponse(this.res, 429, message ? message : 'Too many requests');
  }

  public todo() {
    return ExpressRouteHandler.jsonResponse(this.res, 400, 'TODO');
  }

  public fail(error: Error | string) {
    console.log(error);
    return this.res.status(500).json({
      message: error.toString()
    });
  }
}
