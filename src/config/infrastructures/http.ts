import { GENERAL_CONSTANTS } from "@constants";

interface RequestParams {
  method: "POST" | "GET" | "DELETE" | "PUT";
  endpointUrl?: string;
  body?: RequestInit | undefined;
}

interface GeneralDomainService {
  domainUrl: string;
}

export type Error = {
  httpStatusCode: string;
  status?: number;
  message: string;
};

abstract class Http<DomainService extends GeneralDomainService> {
  private domainService: DomainService;
  private url: string;

  private errorGenerator(errorObject: Error): Error {
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
  }: RequestParams): Promise<ResponseInit | undefined> {
    try {
      const options = {
        timeout: 300_000,
        headers: {
          Content_Type: "application/json",
        },
      };
      const controller = new AbortController();
      this.url = `${process.env.REACT_APP_BASE_URL}${this.domainService["domainUrl"]}${endpointUrl}`;
      const requestId = setTimeout(() => controller.abort(), options.timeout);

      return fetch(this.url, {
        body: JSON.stringify(body),
        method,
        ...options,
      }).then((res) => {
        if (res.ok) {
          return res;
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
