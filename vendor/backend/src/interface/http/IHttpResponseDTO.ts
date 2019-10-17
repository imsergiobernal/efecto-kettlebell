/**
 * Headers... etc
 */
export type IHttpResponseCode = number;
export type IHttpResponsePayload = string | object;

export interface IHttpResponseDTO {
  code: IHttpResponseCode;
  payload?: IHttpResponsePayload;
}
