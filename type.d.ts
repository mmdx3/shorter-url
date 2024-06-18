export interface FetchOptions {
  method: string;
  headers: {
    apikey : string
  };
  body: string;
}

export interface ModelUrlsState {
  long_url : string ,
  short_url : string
}