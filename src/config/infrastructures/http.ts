import { GENERAL_CONSTANTS } from "@constants";

interface RequestParams {
  method: "POST" | "GET" | "DELETE" | "PUT";
  endpointUrl?: string;
  body?: unknown;
}

export type ErrorResponse = {
  httpStatusCode: string;
  status?: number;
  message: string;
};

export class Http {
  private url: string;

  private errorGenerator(errorObject: ErrorResponse): ErrorResponse {
    const emptyErrorMessage = GENERAL_CONSTANTS.SERVICE_ERROR_MESSAGE;
    if (!errorObject?.message?.trim()) {
      errorObject.message = emptyErrorMessage;
    }
    throw errorObject;
  }

  public async request({
    endpointUrl,
    method,
    body,
  }: RequestParams): Promise<any> {
    try {
      const options = {
        timeout: 300_000,
        headers: {
          Content_Type: "application/json",
        },
      };
      const controller = new AbortController();
      const requestId = setTimeout(() => controller.abort(), options.timeout);
      this.url = `${process.env.REACT_APP_BASE_URL}/${endpointUrl}`;

      return await fetch(this.url, {
        body: JSON.stringify(body),
        method,
        ...options,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          this.errorGenerator({
            message: JSON.stringify(res),
            httpStatusCode: res.statusText,
            status: res.status,
          });
        }
        clearTimeout(requestId);
      });
    } catch (error) {
      throw error;
    }
  }
}

export default Http;
