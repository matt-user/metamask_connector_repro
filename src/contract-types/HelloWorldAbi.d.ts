/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.89.1
  Forc version: 0.60.0
  Fuel-Core version: 0.27.0
*/

import type {
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

interface HelloWorldAbiInterface extends Interface {
  functions: {
    test_function: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'test_function', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'test_function', data: BytesLike): DecodedValue;
}

export class HelloWorldAbi extends Contract {
  interface: HelloWorldAbiInterface;
  functions: {
    test_function: InvokeFunction<[], boolean>;
  };
}
