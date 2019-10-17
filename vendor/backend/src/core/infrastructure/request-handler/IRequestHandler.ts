export interface IRequestHandler<RQ> {
    req: RQ;

    handle<RQ>(req: RQ, controller: any): void;
    handle<RQ, RS>(req: RQ, controller: any, res: RS): void;
}
