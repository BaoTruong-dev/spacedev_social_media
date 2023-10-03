export interface ResponseSuccess<Data = null> {
  status: string;
  code: number;
  message: string;
  data?: Data;
}

export interface ResponseError{
  status: string;
  code: number;
  errors: {
    message: string
  };
}

