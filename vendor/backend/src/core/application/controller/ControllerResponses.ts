export type IControllerResponse = {
  clientMessage?: any;
  internalMessage?: any;
  error?: {
    responsible: 'client' | 'server';
    clientSuggestion?: string;
  }
}

/**
 * Controller HTTP coupled responses. Worth it?
 */
export interface IControllerResponses {
  ok<RES, T>(res?: RES, dto?: T);

  /**
   * Send a successful created response.
   * @param {T} res Response handler
   */
  created<T>(res?: T): T;

  /**
   * Send a client error response.
   * Implement with the jsonResponse method.
   */
  clientError(message?: string);

  /**
   * Send a client error unauthorized response.
   * Implement with the jsonResponse method.
   */
  unauthorized(message?: string);

  /**
   * Send a client error forbiden response.
   * Implement with the jsonResponse method.
   */
  forbidden(message?: string);
  /**
   * Send a client error not found response.
   * Implement with the jsonResponse method.
   */
  notFound(message?: string);

  /**
   * Send a client error conflict response.
   * Implement with the jsonResponse method.
   */
  conflict(message?: string);

  /**
   * Send a client error too many requests response.
   * Implement with the jsonResponse method.
   */
  tooMany(message?: string);

  /**
   * Send a TODO response.
   * Implement with the jsonResponse method.
   */
  todo();

  /**
   * Send a server error response.
   * Implement with the jsonResponse method.
   */
  fail(error: Error | string);
}
