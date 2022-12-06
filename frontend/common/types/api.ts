/**
 * Base Request Body
 */

export interface BaseRequest {
  Key: string; // Key for bacward compatiblity. iOS -- UUID , Android -- MAC address
  ID: string; // WebAPI ID
  Data: object | string;
}