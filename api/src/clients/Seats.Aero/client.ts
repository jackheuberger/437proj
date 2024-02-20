import { SearchClientInterface } from "../client_interface";
import { ResponseData, SeatsCachedSearchParams } from "./types";
const sdk = require('api')('@seatsaero/v1.0#cqdn9uslsnn1wyf');

class SeatsAero implements SearchClientInterface {
    constructor(api_key: string) {
        sdk.auth(api_key)
    }

    find_route(params: SeatsCachedSearchParams): Promise<boolean> {
        return new Promise((resolve, reject) => {

            sdk.cachedSearch(params)
                .then(({ data }: { data: any }) => {
                    const parsedResponse: ResponseData = {
                        data: data.data.map((item: any) => ({
                          ...item,
                          Route: {
                            ...item.Route,
                          },
                        })),
                        count: data.count,
                        hasMore: data.hasMore,
                        cursor: data.cursor
                      } as ResponseData;
                      console.log(parsedResponse)
                    resolve(true)
                })
                .catch(console.error)
        })
    }
}

export { SeatsAero }